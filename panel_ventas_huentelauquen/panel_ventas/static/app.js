/* Panel de Control de Ventas — Hacienda Huentelauquén
   Frontend sin dependencias: consume /api/panel y dibuja los gráficos en SVG. */

(function () {
  "use strict";

  var MESES = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
               "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  var estado = {
    datos: null,
    dimension: "producto",
    fmt: null,
    cargando: false
  };

  var el = {};
  ["insignia-periodo", "kicker", "controles", "mes", "anio", "meses", "limite",
   "btn-actualizar", "estado", "aviso", "aviso-titulo", "aviso-texto", "heroe-valor",
   "heroe-deltas", "tarjetas-kpi", "sub-venta", "sub-margen", "grafico-venta",
   "grafico-margen", "tabla-venta", "tabla-margen", "btn-tabla-venta",
   "btn-tabla-margen", "panel-ranking", "nota-rankings", "pie-texto", "tooltip"
  ].forEach(function (id) { el[id] = document.getElementById(id); });

  // ------------------------------------------------------------------ utilidades

  function esc(texto) {
    return String(texto == null ? "" : texto)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  /* Crea los formateadores de la moneda configurada en el servidor. Si el código
     de moneda no es válido se degrada a número simple en vez de romper el panel. */
  function crearFormateadores(moneda) {
    var monto, montoMM;
    try {
      monto = new Intl.NumberFormat("es-CL", {
        style: "currency", currency: moneda, maximumFractionDigits: 0
      });
      montoMM = new Intl.NumberFormat("es-CL", {
        style: "currency", currency: moneda, minimumFractionDigits: 1, maximumFractionDigits: 1
      });
    } catch (error) {
      var simple = new Intl.NumberFormat("es-CL", { maximumFractionDigits: 0 });
      monto = { format: function (v) { return moneda + " " + simple.format(v); } };
      montoMM = { format: function (v) { return moneda + " " + v.toFixed(1); } };
    }
    var unDecimal = new Intl.NumberFormat("es-CL", {
      minimumFractionDigits: 1, maximumFractionDigits: 1
    });
    var entero = new Intl.NumberFormat("es-CL", { maximumFractionDigits: 0 });

    return {
      exacto: function (v) { return v == null ? "—" : monto.format(v); },
      /* Cifras de millones para titulares y ejes; el valor exacto viaja en el
         atributo title y en la tabla, así nada queda escondido. */
      compacto: function (v) {
        if (v == null) return "—";
        return Math.abs(v) >= 1e6 ? montoMM.format(v / 1e6) + " MM" : monto.format(v);
      },
      pct: function (v) { return v == null ? "—" : unDecimal.format(v) + " %"; },
      pctFirmado: function (v) {
        if (v == null) return "—";
        return (v > 0 ? "+" : "") + unDecimal.format(v) + " %";
      },
      numero: function (v) { return v == null ? "—" : entero.format(v); }
    };
  }

  function mostrarAviso(titulo, texto) {
    el["aviso-titulo"].textContent = titulo;
    el["aviso-texto"].textContent = " " + texto;
    el.aviso.hidden = false;
  }

  function ocultarAviso() { el.aviso.hidden = true; }

  // -------------------------------------------------------------------- tooltip

  function mostrarTooltip(evento, html) {
    el.tooltip.innerHTML = html;
    el.tooltip.hidden = false;
    moverTooltip(evento);
  }

  function moverTooltip(evento) {
    var margen = 14;
    var caja = el.tooltip.getBoundingClientRect();
    var x = evento.clientX + margen;
    var y = evento.clientY + margen;
    if (x + caja.width > window.innerWidth - 8) x = evento.clientX - caja.width - margen;
    if (y + caja.height > window.innerHeight - 8) y = evento.clientY - caja.height - margen;
    el.tooltip.style.left = Math.max(8, x) + "px";
    el.tooltip.style.top = Math.max(8, y) + "px";
  }

  function ocultarTooltip() { el.tooltip.hidden = true; }

  /* Une la zona sensible al tooltip. El área de contacto es siempre mayor que la
     marca dibujada, de modo que barras finas y puntos pequeños sigan siendo fáciles
     de apuntar. */
  function conectarTooltip(nodo, html) {
    nodo.addEventListener("mouseenter", function (evento) { mostrarTooltip(evento, html); });
    nodo.addEventListener("mousemove", moverTooltip);
    nodo.addEventListener("mouseleave", ocultarTooltip);
    nodo.addEventListener("focus", function () {
      var caja = nodo.getBoundingClientRect();
      mostrarTooltip({ clientX: caja.left + caja.width / 2, clientY: caja.top }, html);
    });
    nodo.addEventListener("blur", ocultarTooltip);
  }

  // ----------------------------------------------------------------- ayudas SVG

  var NS = "http://www.w3.org/2000/svg";

  function svgEl(nombre, atributos) {
    var nodo = document.createElementNS(NS, nombre);
    Object.keys(atributos || {}).forEach(function (clave) {
      nodo.setAttribute(clave, atributos[clave]);
    });
    return nodo;
  }

  function texto(contenido, atributos, clase) {
    var nodo = svgEl("text", atributos);
    if (clase) nodo.setAttribute("class", clase);
    nodo.textContent = contenido;
    return nodo;
  }

  /* Redondea el tope del eje a una cifra legible (1, 2, 2,5, 5 o 10 por década). */
  function techoAmable(valor) {
    if (!(valor > 0)) return 1;
    var exponente = Math.floor(Math.log10(valor));
    var base = Math.pow(10, exponente);
    var normalizado = valor / base;
    var paso = normalizado <= 1 ? 1
             : normalizado <= 2 ? 2
             : normalizado <= 2.5 ? 2.5
             : normalizado <= 5 ? 5 : 10;
    return paso * base;
  }

  /* Paso de eje que produce marcas legibles (1, 2, 2,5, 5 o 10 por década). */
  function pasoAmable(rango, marcasObjetivo) {
    var crudo = rango / Math.max(1, marcasObjetivo);
    if (!(crudo > 0)) return 1;
    var base = Math.pow(10, Math.floor(Math.log10(crudo)));
    var normalizado = crudo / base;
    var factor = normalizado <= 1 ? 1
               : normalizado <= 2 ? 2
               : normalizado <= 2.5 ? 2.5
               : normalizado <= 5 ? 5 : 10;
    return factor * base;
  }

  /* Barra vertical: extremo superior redondeado en 4px, base cuadrada sobre la
     línea cero — la punta señala el dato, la base ancla la comparación. */
  function rutaColumna(x, y, ancho, alto, radio) {
    if (!(alto > 0)) return "";
    var r = Math.min(radio, ancho / 2, alto);
    return "M" + x + "," + (y + alto) +
           " L" + x + "," + (y + r) +
           " Q" + x + "," + y + " " + (x + r) + "," + y +
           " L" + (x + ancho - r) + "," + y +
           " Q" + (x + ancho) + "," + y + " " + (x + ancho) + "," + (y + r) +
           " L" + (x + ancho) + "," + (y + alto) + " Z";
  }

  /* Cada cuántos meses se rotula el eje X para que las etiquetas no se encabalguen
     en pantallas angostas. Se cuenta desde el final, de modo que el mes más
     reciente —el que se está mirando— siempre lleve rótulo. */
  function pasoEtiquetas(cantidad, plotW, anchoEtiqueta) {
    var caben = Math.max(1, Math.floor(plotW / anchoEtiqueta));
    return Math.max(1, Math.ceil(cantidad / caben));
  }

  function rotula(indice, cantidad, paso) {
    return (cantidad - 1 - indice) % paso === 0;
  }

  /* Mantiene una etiqueta directa dentro del área de dibujo: en los extremos
     cambia el anclaje en vez de dejar que el texto se corte. */
  function anclaje(x, mitad, limiteIzquierdo, limiteDerecho) {
    if (x - mitad < limiteIzquierdo) return { x: limiteIzquierdo, ancla: "start" };
    if (x + mitad > limiteDerecho) return { x: limiteDerecho, ancla: "end" };
    return { x: x, ancla: "middle" };
  }

  /* En pantallas angostas se recorta el margen del eje Y para no comerse el gráfico. */
  function margenEjeY(ancho) { return ancho < 520 ? 62 : 78; }

  function limpiar(nodo) { while (nodo.firstChild) nodo.removeChild(nodo.firstChild); }

  function anchoDisponible(nodo, minimo) {
    var ancho = nodo.parentElement ? nodo.parentElement.clientWidth : 0;
    return Math.max(minimo || 320, ancho || 720);
  }

  // ------------------------------------------------------- gráfico de venta neta

  function dibujarVentaMensual(serie) {
    var svg = el["grafico-venta"];
    limpiar(svg);
    if (!serie.length) return;

    var W = anchoDisponible(svg);
    var H = 260;
    var pad = { arriba: 26, derecha: 14, abajo: 34, izquierda: margenEjeY(W) };
    var plotW = W - pad.izquierda - pad.derecha;
    var plotH = H - pad.arriba - pad.abajo;

    svg.setAttribute("width", W);
    svg.setAttribute("height", H);
    svg.setAttribute("viewBox", "0 0 " + W + " " + H);

    var maximo = Math.max.apply(null, serie.map(function (p) { return p.venta_neta || 0; }));
    var tope = techoAmable(maximo);
    var escalaY = function (v) { return pad.arriba + plotH - (v / tope) * plotH; };

    // Rejilla de fondo: fina, continua y de un solo paso sobre la superficie.
    for (var i = 0; i <= 4; i++) {
      var valor = (tope / 4) * i;
      var y = escalaY(valor);
      svg.appendChild(svgEl("line", {
        x1: pad.izquierda, y1: y, x2: W - pad.derecha, y2: y, class: "linea-grid"
      }));
      svg.appendChild(texto(estado.fmt.compacto(valor), {
        x: pad.izquierda - 10, y: y + 4, "text-anchor": "end"
      }, "eje-texto"));
    }

    var banda = plotW / serie.length;
    var anchoBarra = Math.max(4, Math.min(24, banda - 2)); // 2px de aire entre vecinas
    var indiceMaximo = serie.reduce(function (mejor, punto, indice) {
      return (punto.venta_neta || 0) > (serie[mejor].venta_neta || 0) ? indice : mejor;
    }, 0);
    var pasoX = pasoEtiquetas(serie.length, plotW, 44);

    serie.forEach(function (punto, indice) {
      var valor = punto.venta_neta || 0;
      var x = pad.izquierda + indice * banda + (banda - anchoBarra) / 2;
      var y = escalaY(valor);
      var alto = pad.arriba + plotH - y;

      if (alto > 0) {
        svg.appendChild(svgEl("path", {
          d: rutaColumna(x, y, anchoBarra, alto, 4), fill: "var(--serie-venta)"
        }));
      }

      // Etiquetas directas sólo en el mes más alto y en el último: puestas en
      // todos los meses dejarían de leerse.
      if (indice === indiceMaximo || indice === serie.length - 1) {
        var rotulo = estado.fmt.compacto(valor);
        var sitio = anclaje(x + anchoBarra / 2, rotulo.length * 3.6,
                            pad.izquierda, W - pad.derecha);
        svg.appendChild(texto(rotulo, {
          x: sitio.x, y: Math.max(pad.arriba - 8, y - 7), "text-anchor": sitio.ancla
        }, "etiqueta-directa"));
      }

      if (rotula(indice, serie.length, pasoX)) {
        svg.appendChild(texto(punto.etiqueta, {
          x: x + anchoBarra / 2, y: H - 12, "text-anchor": "middle"
        }, "eje-texto"));
      }

      var zona = svgEl("rect", {
        x: pad.izquierda + indice * banda, y: pad.arriba,
        width: banda, height: plotH, class: "zona-activa", tabindex: "0",
        role: "img",
        "aria-label": punto.etiqueta_larga + ": " + estado.fmt.exacto(valor)
      });
      conectarTooltip(zona,
        '<div class="tooltip__titulo">' + esc(punto.etiqueta_larga) + "</div>" +
        '<div class="tooltip__fila">Venta neta: ' + esc(estado.fmt.exacto(valor)) + "</div>" +
        (punto.margen == null ? "" :
          '<div class="tooltip__fila">Margen: ' + esc(estado.fmt.exacto(punto.margen)) +
          " (" + esc(estado.fmt.pct(punto.margen_pct)) + ")</div>"));
      svg.appendChild(zona);
    });

    svg.appendChild(svgEl("line", {
      x1: pad.izquierda, y1: pad.arriba + plotH, x2: W - pad.derecha, y2: pad.arriba + plotH,
      class: "linea-grid"
    }));
  }

  // ------------------------------------------------------- gráfico de margen (%)

  function dibujarMargenMensual(serie, hayMargen) {
    var svg = el["grafico-margen"];
    limpiar(svg);

    if (!hayMargen) {
      svg.setAttribute("height", 0);
      el["sub-margen"].textContent =
        "Odoo no entrega margen en Análisis de ventas: instale el módulo «Margen en ventas» (sale_margin) para activar este gráfico.";
      return;
    }

    var puntos = serie.filter(function (p) { return p.margen_pct != null; });
    if (puntos.length < 2) {
      svg.setAttribute("height", 0);
      el["sub-margen"].textContent = "Sin meses suficientes con venta para trazar el margen.";
      return;
    }

    var W = anchoDisponible(svg);
    var H = 190;
    var pad = { arriba: 26, derecha: 44, abajo: 34, izquierda: margenEjeY(W) };
    var plotW = W - pad.izquierda - pad.derecha;
    var plotH = H - pad.arriba - pad.abajo;

    svg.setAttribute("width", W);
    svg.setAttribute("height", H);
    svg.setAttribute("viewBox", "0 0 " + W + " " + H);

    var presentes = serie.map(function (p) { return p.margen_pct; })
                         .filter(function (v) { return v != null; });
    var minimo = Math.min.apply(null, presentes);
    var maximo = Math.max.apply(null, presentes);
    // El margen es una tasa y se lee en su propio rango: anclar el eje en cero
    // aplanaría meses que sí se mueven. El cero entra sólo si hay margen negativo.
    if (minimo > 0) minimo = minimo - (maximo - minimo) * 0.25;
    else minimo = Math.min(minimo, 0);

    var paso = pasoAmable(Math.max(maximo - minimo, 0.5), 4);
    var piso = Math.floor(minimo / paso) * paso;
    var techo = Math.ceil(maximo / paso) * paso;
    if (techo <= piso) techo = piso + paso;
    var marcas = Math.round((techo - piso) / paso);
    var escalaY = function (v) { return pad.arriba + plotH - ((v - piso) / (techo - piso)) * plotH; };
    var banda = plotW / serie.length;
    var escalaX = function (indice) { return pad.izquierda + indice * banda + banda / 2; };

    for (var i = 0; i <= marcas; i++) {
      var valor = piso + paso * i;
      var y = escalaY(valor);
      svg.appendChild(svgEl("line", {
        x1: pad.izquierda, y1: y, x2: W - pad.derecha, y2: y, class: "linea-grid"
      }));
      svg.appendChild(texto(estado.fmt.pct(valor), {
        x: pad.izquierda - 10, y: y + 4, "text-anchor": "end"
      }, "eje-texto"));
    }

    // Los meses sin venta cortan la línea en lugar de inventar un punto en cero.
    var tramos = [];
    var tramo = [];
    serie.forEach(function (punto, indice) {
      if (punto.margen_pct == null) {
        if (tramo.length) tramos.push(tramo);
        tramo = [];
      } else {
        tramo.push({ x: escalaX(indice), y: escalaY(punto.margen_pct), punto: punto, indice: indice });
      }
    });
    if (tramo.length) tramos.push(tramo);

    tramos.forEach(function (segmento) {
      if (segmento.length === 1) {
        svg.appendChild(svgEl("circle", {
          cx: segmento[0].x, cy: segmento[0].y, r: 4.5,
          fill: "var(--serie-margen)", stroke: "var(--superficie)", "stroke-width": 2
        }));
        return;
      }
      svg.appendChild(svgEl("polyline", {
        points: segmento.map(function (p) { return p.x + "," + p.y; }).join(" "),
        fill: "none", stroke: "var(--serie-margen)", "stroke-width": 2,
        "stroke-linejoin": "round", "stroke-linecap": "round"
      }));
    });

    var planos = tramos.reduce(function (acumulado, segmento) { return acumulado.concat(segmento); }, []);
    var ultimo = planos[planos.length - 1];
    var mejor = planos.reduce(function (a, b) { return b.punto.margen_pct > a.punto.margen_pct ? b : a; });

    [mejor, ultimo].forEach(function (marca, orden) {
      svg.appendChild(svgEl("circle", {
        cx: marca.x, cy: marca.y, r: 4.5,
        fill: "var(--serie-margen)", stroke: "var(--superficie)", "stroke-width": 2
      }));
      if (orden === 1 || mejor !== ultimo) {
        var rotulo = estado.fmt.pct(marca.punto.margen_pct);
        var sitio = anclaje(marca.x, rotulo.length * 3.6, pad.izquierda, W - pad.derecha);
        svg.appendChild(texto(rotulo, {
          x: sitio.x, y: marca.y - 11, "text-anchor": sitio.ancla
        }, "etiqueta-directa"));
      }
    });

    var pasoX = pasoEtiquetas(serie.length, plotW, 44);
    serie.forEach(function (punto, indice) {
      if (rotula(indice, serie.length, pasoX)) {
        svg.appendChild(texto(punto.etiqueta, {
          x: escalaX(indice), y: H - 12, "text-anchor": "middle"
        }, "eje-texto"));
      }
      var zona = svgEl("rect", {
        x: pad.izquierda + indice * banda, y: pad.arriba,
        width: banda, height: plotH, class: "zona-activa", tabindex: "0", role: "img",
        "aria-label": punto.etiqueta_larga + ": margen " + estado.fmt.pct(punto.margen_pct)
      });
      conectarTooltip(zona,
        '<div class="tooltip__titulo">' + esc(punto.etiqueta_larga) + "</div>" +
        '<div class="tooltip__fila">Margen: ' + esc(estado.fmt.pct(punto.margen_pct)) + "</div>" +
        '<div class="tooltip__fila">Margen $: ' + esc(estado.fmt.exacto(punto.margen)) + "</div>" +
        '<div class="tooltip__fila">Venta neta: ' + esc(estado.fmt.exacto(punto.venta_neta)) + "</div>");
      svg.appendChild(zona);
    });
  }

  // ---------------------------------------------------------------- tablas

  function tablaTendencia(serie, hayMargen) {
    var encabezados = ["Mes", "Venta neta", "Margen", "Margen %"];
    var filas = serie.map(function (punto) {
      return [
        esc(punto.etiqueta_larga),
        esc(estado.fmt.exacto(punto.venta_neta)),
        esc(estado.fmt.exacto(punto.margen)),
        esc(estado.fmt.pct(punto.margen_pct))
      ];
    });
    if (!hayMargen) {
      encabezados = encabezados.slice(0, 2);
      filas = filas.map(function (fila) { return fila.slice(0, 2); });
    }
    return '<table class="datos"><caption>Valores exactos de la serie mensual.</caption>' +
      "<thead><tr>" + encabezados.map(function (h) { return "<th>" + h + "</th>"; }).join("") +
      "</tr></thead><tbody>" +
      filas.map(function (fila) {
        return "<tr>" + fila.map(function (celda) { return "<td>" + celda + "</td>"; }).join("") + "</tr>";
      }).join("") +
      "</tbody></table>";
  }

  function alternarTabla(boton, contenedor, generar) {
    boton.addEventListener("click", function () {
      var visible = !contenedor.hidden;
      if (visible) {
        contenedor.hidden = true;
        boton.textContent = "Ver tabla";
        boton.setAttribute("aria-expanded", "false");
      } else {
        contenedor.innerHTML = generar();
        contenedor.hidden = false;
        boton.textContent = "Ocultar tabla";
        boton.setAttribute("aria-expanded", "true");
      }
    });
  }

  // -------------------------------------------------------------- indicadores

  function chipDelta(comparativo) {
    var variacion = comparativo.variacion_venta_pct;
    var clase = variacion == null ? "delta--nd" : variacion >= 0 ? "delta--sube" : "delta--baja";
    // La flecha repite la dirección, para no depender sólo del color.
    var flecha = variacion == null ? "" : (variacion >= 0 ? "▲ " : "▼ ");
    return '<span class="delta ' + clase + '">' +
      '<span class="delta__cifra">' + flecha + esc(estado.fmt.pctFirmado(variacion)) + "</span>" +
      "<span>vs " + esc(comparativo.etiqueta) + "</span></span>";
  }

  function pintarResumen(datos) {
    var resumen = datos.resumen;
    el["heroe-valor"].textContent = estado.fmt.compacto(resumen.venta_neta);
    el["heroe-valor"].title = estado.fmt.exacto(resumen.venta_neta);
    el["heroe-deltas"].innerHTML =
      chipDelta(resumen.comparativo.mes_anterior) + chipDelta(resumen.comparativo.anio_anterior);

    var tarjetas = [
      {
        etiqueta: "Costo de la venta",
        valor: estado.fmt.compacto(resumen.costo),
        exacto: estado.fmt.exacto(resumen.costo),
        pie: datos.margen_disponible ? "Venta neta menos margen" : "Requiere el módulo Margen en ventas"
      },
      {
        etiqueta: "Margen",
        valor: estado.fmt.compacto(resumen.margen),
        exacto: estado.fmt.exacto(resumen.margen),
        pie: "vs " + resumen.comparativo.mes_anterior.etiqueta + ": " +
             estado.fmt.pctFirmado(resumen.comparativo.mes_anterior.variacion_margen_pct)
      },
      {
        etiqueta: "Margen sobre venta",
        valor: estado.fmt.pct(resumen.margen_pct),
        exacto: "",
        pie: "Margen ÷ venta neta"
      },
      {
        etiqueta: "Pedidos confirmados",
        valor: estado.fmt.numero(resumen.pedidos),
        exacto: "",
        pie: estado.fmt.numero(resumen.lineas) + " líneas de venta"
      },
      {
        etiqueta: "Ticket promedio",
        valor: estado.fmt.compacto(resumen.ticket_promedio),
        exacto: estado.fmt.exacto(resumen.ticket_promedio),
        pie: "Venta neta ÷ pedidos"
      }
    ];

    el["tarjetas-kpi"].innerHTML = tarjetas.map(function (tarjeta) {
      return '<div class="tarjeta tarjeta-kpi">' +
        '<p class="tarjeta-kpi__etiqueta">' + esc(tarjeta.etiqueta) + "</p>" +
        '<div class="tarjeta-kpi__valor"' +
        (tarjeta.exacto ? ' title="' + esc(tarjeta.exacto) + '"' : "") + ">" +
        esc(tarjeta.valor) + "</div>" +
        '<p class="tarjeta-kpi__pie">' + esc(tarjeta.pie) + "</p></div>";
    }).join("");
  }

  // ------------------------------------------------------------------ rankings

  function pintarRanking() {
    var datos = estado.datos;
    var ranking = datos.rankings[estado.dimension];
    var contenedor = el["panel-ranking"];

    if (!ranking || !ranking.disponible) {
      contenedor.innerHTML = '<p class="vacio">Esta dimensión no está disponible en su instalación de Odoo.</p>';
      return;
    }
    if (!ranking.filas.length) {
      contenedor.innerHTML = '<p class="vacio">Sin ventas registradas en el período seleccionado.</p>';
      return;
    }

    var mayor = Math.max.apply(null, ranking.filas.map(function (f) { return f.venta_neta || 0; }));
    var hayMargen = datos.margen_disponible;

    var encabezado = '<tr><th>#</th><th class="celda-nombre">' + esc(ranking.etiqueta) + "</th>" +
      '<th class="celda-barra">Distribución</th><th>Venta neta</th><th>Participación</th>' +
      (hayMargen ? "<th>Margen</th><th>Margen %</th>" : "") + "</tr>";

    var cuerpo = ranking.filas.map(function (fila, indice) {
      var ancho = mayor > 0 ? Math.max(1, (fila.venta_neta / mayor) * 100) : 0;
      return "<tr>" +
        "<td>" + (indice + 1) + "</td>" +
        '<td class="celda-nombre" title="' + esc(fila.nombre) + '">' + esc(fila.nombre) + "</td>" +
        '<td class="celda-barra"><span class="barra-fila" style="width:' + ancho.toFixed(2) + '%" ' +
        'title="' + esc(estado.fmt.exacto(fila.venta_neta)) + '"></span></td>' +
        "<td>" + esc(estado.fmt.exacto(fila.venta_neta)) + "</td>" +
        "<td>" + esc(estado.fmt.pct(fila.participacion_pct)) + "</td>" +
        (hayMargen
          ? "<td>" + esc(estado.fmt.exacto(fila.margen)) + "</td><td>" +
            esc(estado.fmt.pct(fila.margen_pct)) + "</td>"
          : "") +
        "</tr>";
    }).join("");

    contenedor.innerHTML = '<div class="tabla-envoltorio"><table class="datos">' +
      "<caption>Top " + ranking.filas.length + " por venta neta · " +
      esc(datos.periodo.etiqueta) + "</caption>" +
      "<thead>" + encabezado + "</thead><tbody>" + cuerpo + "</tbody></table></div>";

    document.querySelectorAll(".pestana").forEach(function (pestana) {
      var activa = pestana.dataset.dim === estado.dimension;
      pestana.setAttribute("aria-selected", activa ? "true" : "false");
      if (activa) contenedor.setAttribute("aria-labelledby", pestana.id);
    });
  }

  // ------------------------------------------------------------------- pintado

  function pintar(datos) {
    estado.datos = datos;
    estado.fmt = crearFormateadores(datos.moneda);

    el.kicker.textContent = datos.organizacion;
    document.title = "Panel de Control de Ventas — " + datos.organizacion;
    el["insignia-periodo"].textContent = datos.periodo.etiqueta;

    pintarResumen(datos);

    var totalTendencia = datos.tendencia.reduce(function (suma, punto) {
      return suma + (punto.venta_neta || 0);
    }, 0);
    el["sub-venta"].textContent = datos.tendencia.length + " meses hasta " +
      datos.tendencia[datos.tendencia.length - 1].etiqueta_larga +
      " · acumulado " + estado.fmt.compacto(totalTendencia);
    if (datos.margen_disponible) {
      el["sub-margen"].textContent = "Margen sobre venta neta, mes a mes.";
    }

    dibujarVentaMensual(datos.tendencia);
    dibujarMargenMensual(datos.tendencia, datos.margen_disponible);

    el["tabla-venta"].hidden = true;
    el["btn-tabla-venta"].textContent = "Ver tabla";
    el["btn-tabla-venta"].setAttribute("aria-expanded", "false");
    el["tabla-margen"].hidden = true;
    el["btn-tabla-margen"].textContent = "Ver tabla";
    el["btn-tabla-margen"].setAttribute("aria-expanded", "false");

    pintarRanking();

    el["pie-texto"].textContent =
      "Fuente: Odoo — modelo sale.report (Análisis de ventas). Importes netos sin IVA, " +
      "zona horaria " + datos.zona_horaria + ", moneda " + datos.moneda + ".";
  }

  // --------------------------------------------------------------------- datos

  function parametros() {
    var busca = new URLSearchParams();
    busca.set("anio", el.anio.value);
    busca.set("mes", el.mes.value);
    busca.set("meses", el.meses.value);
    busca.set("limite", el.limite.value);
    return busca.toString();
  }

  function cargar() {
    if (estado.cargando) return;
    estado.cargando = true;
    el["btn-actualizar"].disabled = true;
    el.estado.textContent = "Consultando Odoo…";
    document.querySelector("main").classList.add("cargando");

    fetch("/api/panel?" + parametros(), { headers: { Accept: "application/json" } })
      .then(function (respuesta) {
        return respuesta.json().then(function (cuerpo) {
          return { ok: respuesta.ok, cuerpo: cuerpo };
        });
      })
      .then(function (resultado) {
        if (!resultado.ok) throw new Error(resultado.cuerpo.error || "Error desconocido");
        ocultarAviso();
        pintar(resultado.cuerpo);
        el.estado.textContent = "Actualizado a las " +
          new Date().toLocaleTimeString("es-CL", { hour: "2-digit", minute: "2-digit" });
      })
      .catch(function (error) {
        mostrarAviso("No se pudo cargar el panel.", error.message);
        el.estado.textContent = "";
      })
      .then(function () {
        estado.cargando = false;
        el["btn-actualizar"].disabled = false;
        document.querySelector("main").classList.remove("cargando");
      });
  }

  // -------------------------------------------------------------------- arranque

  function poblarSelectores() {
    var hoy = new Date();
    MESES.forEach(function (nombre, indice) {
      var opcion = document.createElement("option");
      opcion.value = String(indice + 1);
      opcion.textContent = nombre;
      el.mes.appendChild(opcion);
    });
    for (var anio = hoy.getFullYear() + 1; anio >= hoy.getFullYear() - 6; anio--) {
      var opcion = document.createElement("option");
      opcion.value = String(anio);
      opcion.textContent = String(anio);
      el.anio.appendChild(opcion);
    }
    el.mes.value = String(hoy.getMonth() + 1);
    el.anio.value = String(hoy.getFullYear());
  }

  function conectarEventos() {
    el.controles.addEventListener("submit", function (evento) {
      evento.preventDefault();
      cargar();
    });

    document.querySelectorAll(".pestana").forEach(function (pestana) {
      pestana.addEventListener("click", function () {
        estado.dimension = pestana.dataset.dim;
        if (estado.datos) pintarRanking();
      });
    });

    alternarTabla(el["btn-tabla-venta"], el["tabla-venta"], function () {
      return tablaTendencia(estado.datos.tendencia, estado.datos.margen_disponible);
    });
    alternarTabla(el["btn-tabla-margen"], el["tabla-margen"], function () {
      return tablaTendencia(estado.datos.tendencia, estado.datos.margen_disponible);
    });

    var temporizador = null;
    window.addEventListener("resize", function () {
      if (!estado.datos) return;
      clearTimeout(temporizador);
      temporizador = setTimeout(function () {
        dibujarVentaMensual(estado.datos.tendencia);
        dibujarMargenMensual(estado.datos.tendencia, estado.datos.margen_disponible);
      }, 150);
    });
  }

  poblarSelectores();
  conectarEventos();
  cargar();
})();
