:orphan:
:nosearch:

==================================
Material Symbols - Supported Icons
==================================

.. note::
   Odoo bundles only a subset of Material Symbols rather than the full library. The list of
   supported icons is maintained in
   `odoo/addons/web/tooling/icons/icons_wishlist.txt <{GITHUB_PATH}/addons/web/tooling/icons/icons_wishlist.txt>`_.

.. raw:: html

   <div class="row mb-4">
      <div class="col-12 col-md-4">
         <input type="text" id="icon-search" class="form-control" placeholder="Search icons...">
      </div>
   </div>

   <script>
   document.getElementById('icon-search').addEventListener('input', function(e) {
     const query = e.target.value.toLowerCase();
     document.querySelectorAll('.o_icon_card').forEach(card => {
       const name = card.querySelector('code').textContent.toLowerCase();
       card.style.display = name.includes(query) ? '' : 'none';
     });
   });
   </script>

   <section class="row">
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">ac_unit</span>
              <code class="pb-3">ac_unit</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">accessibility</span>
              <code class="pb-3">accessibility</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">accessible</span>
              <code class="pb-3">accessible</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">accessible_forward</span>
              <code class="pb-3">accessible_forward</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">account_balance</span>
              <code class="pb-3">account_balance</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">account_circle</span>
              <code class="pb-3">account_circle</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">account_tree</span>
              <code class="pb-3">account_tree</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">add</span>
              <code class="pb-3">add</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">add_box</span>
              <code class="pb-3">add_box</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">add_circle</span>
              <code class="pb-3">add_circle</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">add_reaction</span>
              <code class="pb-3">add_reaction</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">add_shopping_cart</span>
              <code class="pb-3">add_shopping_cart</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">alarm_add</span>
              <code class="pb-3">alarm_add</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">alternate_email</span>
              <code class="pb-3">alternate_email</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">anchor</span>
              <code class="pb-3">anchor</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">apps</span>
              <code class="pb-3">apps</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">archive</span>
              <code class="pb-3">archive</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">area_chart</span>
              <code class="pb-3">area_chart</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">arrow_back</span>
              <code class="pb-3">arrow_back</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">arrow_circle_down</span>
              <code class="pb-3">arrow_circle_down</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">arrow_circle_left</span>
              <code class="pb-3">arrow_circle_left</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">arrow_circle_right</span>
              <code class="pb-3">arrow_circle_right</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">arrow_circle_up</span>
              <code class="pb-3">arrow_circle_up</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">arrow_downward</span>
              <code class="pb-3">arrow_downward</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">arrow_drop_down</span>
              <code class="pb-3">arrow_drop_down</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">arrow_drop_down_circle</span>
              <code class="pb-3">arrow_drop_down_circle</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">arrow_drop_up</span>
              <code class="pb-3">arrow_drop_up</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">arrow_forward</span>
              <code class="pb-3">arrow_forward</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">arrow_left</span>
              <code class="pb-3">arrow_left</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">arrow_range</span>
              <code class="pb-3">arrow_range</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">arrow_right</span>
              <code class="pb-3">arrow_right</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">arrow_selector_tool</span>
              <code class="pb-3">arrow_selector_tool</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">arrow_upward</span>
              <code class="pb-3">arrow_upward</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">article</span>
              <code class="pb-3">article</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">assignment</span>
              <code class="pb-3">assignment</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">attach_file</span>
              <code class="pb-3">attach_file</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">attach_money</span>
              <code class="pb-3">attach_money</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">audio_description</span>
              <code class="pb-3">audio_description</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">audio_file</span>
              <code class="pb-3">audio_file</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">autorenew</span>
              <code class="pb-3">autorenew</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">back_hand</span>
              <code class="pb-3">back_hand</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">backspace</span>
              <code class="pb-3">backspace</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">badge</span>
              <code class="pb-3">badge</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">balance</span>
              <code class="pb-3">balance</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">bar_chart</span>
              <code class="pb-3">bar_chart</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">barcode</span>
              <code class="pb-3">barcode</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">bathtub</span>
              <code class="pb-3">bathtub</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">battery_0_bar</span>
              <code class="pb-3">battery_0_bar</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">battery_2_bar</span>
              <code class="pb-3">battery_2_bar</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">battery_3_bar</span>
              <code class="pb-3">battery_3_bar</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">battery_5_bar</span>
              <code class="pb-3">battery_5_bar</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">battery_full</span>
              <code class="pb-3">battery_full</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">bed</span>
              <code class="pb-3">bed</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">blind</span>
              <code class="pb-3">blind</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">block</span>
              <code class="pb-3">block</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">bluetooth</span>
              <code class="pb-3">bluetooth</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">book</span>
              <code class="pb-3">book</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">bookmark</span>
              <code class="pb-3">bookmark</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">brush</span>
              <code class="pb-3">brush</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">bug_report</span>
              <code class="pb-3">bug_report</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">build</span>
              <code class="pb-3">build</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">business</span>
              <code class="pb-3">business</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">cake</span>
              <code class="pb-3">cake</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">calculate</span>
              <code class="pb-3">calculate</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">calendar_add_on</span>
              <code class="pb-3">calendar_add_on</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">calendar_clock</span>
              <code class="pb-3">calendar_clock</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">calendar_today</span>
              <code class="pb-3">calendar_today</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">call_merge</span>
              <code class="pb-3">call_merge</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">campaign</span>
              <code class="pb-3">campaign</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">cancel</span>
              <code class="pb-3">cancel</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">card_giftcard</span>
              <code class="pb-3">card_giftcard</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">cardiology</span>
              <code class="pb-3">cardiology</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">chat_bubble</span>
              <code class="pb-3">chat_bubble</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">check</span>
              <code class="pb-3">check</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">check_box</span>
              <code class="pb-3">check_box</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">check_circle</span>
              <code class="pb-3">check_circle</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">checklist</span>
              <code class="pb-3">checklist</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">chevron_backward</span>
              <code class="pb-3">chevron_backward</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">chevron_forward</span>
              <code class="pb-3">chevron_forward</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">chevron_left</span>
              <code class="pb-3">chevron_left</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">chevron_right</span>
              <code class="pb-3">chevron_right</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">child_care</span>
              <code class="pb-3">child_care</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">circle</span>
              <code class="pb-3">circle</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">close</span>
              <code class="pb-3">close</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">close_fullscreen</span>
              <code class="pb-3">close_fullscreen</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">close_small</span>
              <code class="pb-3">close_small</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">closed_caption</span>
              <code class="pb-3">closed_caption</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">cloud</span>
              <code class="pb-3">cloud</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">cloud_download</span>
              <code class="pb-3">cloud_download</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">cloud_upload</span>
              <code class="pb-3">cloud_upload</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">code</span>
              <code class="pb-3">code</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">coffee</span>
              <code class="pb-3">coffee</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">colorize</span>
              <code class="pb-3">colorize</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">confirmation_number</span>
              <code class="pb-3">confirmation_number</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">contact_mail</span>
              <code class="pb-3">contact_mail</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">contact_page</span>
              <code class="pb-3">contact_page</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">content_copy</span>
              <code class="pb-3">content_copy</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">content_cut</span>
              <code class="pb-3">content_cut</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">content_paste</span>
              <code class="pb-3">content_paste</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">contrast</span>
              <code class="pb-3">contrast</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">copyright</span>
              <code class="pb-3">copyright</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">credit_card</span>
              <code class="pb-3">credit_card</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">crisis_alert</span>
              <code class="pb-3">crisis_alert</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">crop</span>
              <code class="pb-3">crop</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">currency_bitcoin</span>
              <code class="pb-3">currency_bitcoin</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">currency_lira</span>
              <code class="pb-3">currency_lira</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">currency_pound</span>
              <code class="pb-3">currency_pound</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">currency_ruble</span>
              <code class="pb-3">currency_ruble</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">currency_rupee</span>
              <code class="pb-3">currency_rupee</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">currency_yen</span>
              <code class="pb-3">currency_yen</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">dark_mode</span>
              <code class="pb-3">dark_mode</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">database</span>
              <code class="pb-3">database</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">delete</span>
              <code class="pb-3">delete</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">deployed_code</span>
              <code class="pb-3">deployed_code</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">description</span>
              <code class="pb-3">description</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">deselect</span>
              <code class="pb-3">deselect</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">desktop_windows</span>
              <code class="pb-3">desktop_windows</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">device_thermostat</span>
              <code class="pb-3">device_thermostat</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">dialpad</span>
              <code class="pb-3">dialpad</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">diamond</span>
              <code class="pb-3">diamond</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">directions_bike</span>
              <code class="pb-3">directions_bike</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">directions_boat</span>
              <code class="pb-3">directions_boat</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">directions_bus</span>
              <code class="pb-3">directions_bus</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">directions_car</span>
              <code class="pb-3">directions_car</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">dns</span>
              <code class="pb-3">dns</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">dock_to_left</span>
              <code class="pb-3">dock_to_left</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">download</span>
              <code class="pb-3">download</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">drafts</span>
              <code class="pb-3">drafts</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">drag_indicator</span>
              <code class="pb-3">drag_indicator</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">early_on</span>
              <code class="pb-3">early_on</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">east</span>
              <code class="pb-3">east</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">eco</span>
              <code class="pb-3">eco</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">edit</span>
              <code class="pb-3">edit</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">edit_square</span>
              <code class="pb-3">edit_square</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">eject</span>
              <code class="pb-3">eject</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">emergency</span>
              <code class="pb-3">emergency</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">error</span>
              <code class="pb-3">error</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">euro</span>
              <code class="pb-3">euro</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">event_available</span>
              <code class="pb-3">event_available</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">event_busy</span>
              <code class="pb-3">event_busy</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">event_upcoming</span>
              <code class="pb-3">event_upcoming</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">expand_circle_down</span>
              <code class="pb-3">expand_circle_down</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">expand_circle_up</span>
              <code class="pb-3">expand_circle_up</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">expand_content</span>
              <code class="pb-3">expand_content</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">expand_less</span>
              <code class="pb-3">expand_less</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">expand_more</span>
              <code class="pb-3">expand_more</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">explore</span>
              <code class="pb-3">explore</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">extension</span>
              <code class="pb-3">extension</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">factory</span>
              <code class="pb-3">factory</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">fast_forward</span>
              <code class="pb-3">fast_forward</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">fast_rewind</span>
              <code class="pb-3">fast_rewind</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">favorite</span>
              <code class="pb-3">favorite</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">fax</span>
              <code class="pb-3">fax</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">female</span>
              <code class="pb-3">female</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">filter_alt</span>
              <code class="pb-3">filter_alt</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">fire_extinguisher</span>
              <code class="pb-3">fire_extinguisher</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">flag</span>
              <code class="pb-3">flag</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">flash_on</span>
              <code class="pb-3">flash_on</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">flight</span>
              <code class="pb-3">flight</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">flip_to_back</span>
              <code class="pb-3">flip_to_back</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">flip_to_front</span>
              <code class="pb-3">flip_to_front</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">folder</span>
              <code class="pb-3">folder</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">folder_open</span>
              <code class="pb-3">folder_open</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">folder_zip</span>
              <code class="pb-3">folder_zip</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">font_download</span>
              <code class="pb-3">font_download</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">fork_right</span>
              <code class="pb-3">fork_right</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">format_align_center</span>
              <code class="pb-3">format_align_center</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">format_align_justify</span>
              <code class="pb-3">format_align_justify</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">format_align_left</span>
              <code class="pb-3">format_align_left</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">format_align_right</span>
              <code class="pb-3">format_align_right</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">format_bold</span>
              <code class="pb-3">format_bold</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">format_image_front</span>
              <code class="pb-3">format_image_front</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">format_image_inline_left</span>
              <code class="pb-3">format_image_inline_left</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">format_indent_decrease</span>
              <code class="pb-3">format_indent_decrease</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">format_indent_increase</span>
              <code class="pb-3">format_indent_increase</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">format_italic</span>
              <code class="pb-3">format_italic</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">format_list_bulleted</span>
              <code class="pb-3">format_list_bulleted</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">format_list_numbered</span>
              <code class="pb-3">format_list_numbered</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">format_paragraph</span>
              <code class="pb-3">format_paragraph</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">format_quote</span>
              <code class="pb-3">format_quote</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">format_underlined</span>
              <code class="pb-3">format_underlined</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">forum</span>
              <code class="pb-3">forum</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">fullscreen</span>
              <code class="pb-3">fullscreen</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">fullscreen_exit</span>
              <code class="pb-3">fullscreen_exit</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">gavel</span>
              <code class="pb-3">gavel</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">gif_box</span>
              <code class="pb-3">gif_box</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">grain</span>
              <code class="pb-3">grain</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">graphic_eq</span>
              <code class="pb-3">graphic_eq</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">grid_view</span>
              <code class="pb-3">grid_view</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">group</span>
              <code class="pb-3">group</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">handshake</span>
              <code class="pb-3">handshake</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">headphones</span>
              <code class="pb-3">headphones</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">hearing</span>
              <code class="pb-3">hearing</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">hearing_disabled</span>
              <code class="pb-3">hearing_disabled</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">height</span>
              <code class="pb-3">height</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">help</span>
              <code class="pb-3">help</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">help_outline</span>
              <code class="pb-3">help_outline</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">history</span>
              <code class="pb-3">history</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">home</span>
              <code class="pb-3">home</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">hourglass_bottom</span>
              <code class="pb-3">hourglass_bottom</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">hourglass_disabled</span>
              <code class="pb-3">hourglass_disabled</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">hourglass_empty</span>
              <code class="pb-3">hourglass_empty</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">hourglass_top</span>
              <code class="pb-3">hourglass_top</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">image</span>
              <code class="pb-3">image</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">inbox</span>
              <code class="pb-3">inbox</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">indeterminate_check_box</span>
              <code class="pb-3">indeterminate_check_box</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">info</span>
              <code class="pb-3">info</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">ink_eraser</span>
              <code class="pb-3">ink_eraser</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">inventory_2</span>
              <code class="pb-3">inventory_2</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">key</span>
              <code class="pb-3">key</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">keyboard</span>
              <code class="pb-3">keyboard</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">keyboard_arrow_down</span>
              <code class="pb-3">keyboard_arrow_down</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">keyboard_arrow_left</span>
              <code class="pb-3">keyboard_arrow_left</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">keyboard_arrow_right</span>
              <code class="pb-3">keyboard_arrow_right</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">keyboard_arrow_up</span>
              <code class="pb-3">keyboard_arrow_up</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">keyboard_double_arrow_down</span>
              <code class="pb-3">keyboard_double_arrow_down</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">keyboard_double_arrow_left</span>
              <code class="pb-3">keyboard_double_arrow_left</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">keyboard_double_arrow_right</span>
              <code class="pb-3">keyboard_double_arrow_right</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">keyboard_double_arrow_up</span>
              <code class="pb-3">keyboard_double_arrow_up</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">label</span>
              <code class="pb-3">label</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">laptop</span>
              <code class="pb-3">laptop</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">light_mode</span>
              <code class="pb-3">light_mode</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">lightbulb</span>
              <code class="pb-3">lightbulb</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">link</span>
              <code class="pb-3">link</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">link_off</span>
              <code class="pb-3">link_off</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">list_alt</span>
              <code class="pb-3">list_alt</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">local_bar</span>
              <code class="pb-3">local_bar</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">local_hospital</span>
              <code class="pb-3">local_hospital</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">local_shipping</span>
              <code class="pb-3">local_shipping</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">local_taxi</span>
              <code class="pb-3">local_taxi</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">location_on</span>
              <code class="pb-3">location_on</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">lock</span>
              <code class="pb-3">lock</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">lock_open</span>
              <code class="pb-3">lock_open</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">login</span>
              <code class="pb-3">login</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">logout</span>
              <code class="pb-3">logout</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">luggage</span>
              <code class="pb-3">luggage</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">mail</span>
              <code class="pb-3">mail</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">male</span>
              <code class="pb-3">male</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">map</span>
              <code class="pb-3">map</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">medical_services</span>
              <code class="pb-3">medical_services</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">memory</span>
              <code class="pb-3">memory</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">menu</span>
              <code class="pb-3">menu</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">mic</span>
              <code class="pb-3">mic</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">mic_off</span>
              <code class="pb-3">mic_off</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">minimize</span>
              <code class="pb-3">minimize</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">mode_comment</span>
              <code class="pb-3">mode_comment</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">more_horiz</span>
              <code class="pb-3">more_horiz</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">more_vert</span>
              <code class="pb-3">more_vert</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">movie</span>
              <code class="pb-3">movie</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">music_note</span>
              <code class="pb-3">music_note</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">my_location</span>
              <code class="pb-3">my_location</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">near_me</span>
              <code class="pb-3">near_me</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">newspaper</span>
              <code class="pb-3">newspaper</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">no_encryption</span>
              <code class="pb-3">no_encryption</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">north</span>
              <code class="pb-3">north</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">north_east</span>
              <code class="pb-3">north_east</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">north_west</span>
              <code class="pb-3">north_west</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">notifications</span>
              <code class="pb-3">notifications</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">notifications_off</span>
              <code class="pb-3">notifications_off</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">open_in_browser</span>
              <code class="pb-3">open_in_browser</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">open_in_new</span>
              <code class="pb-3">open_in_new</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">open_with</span>
              <code class="pb-3">open_with</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">pan_tool_alt</span>
              <code class="pb-3">pan_tool_alt</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">park</span>
              <code class="pb-3">park</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">pause</span>
              <code class="pb-3">pause</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">pause_circle</span>
              <code class="pb-3">pause_circle</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">payments</span>
              <code class="pb-3">payments</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">percent</span>
              <code class="pb-3">percent</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">person</span>
              <code class="pb-3">person</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">person_add</span>
              <code class="pb-3">person_add</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">person_remove</span>
              <code class="pb-3">person_remove</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">pets</span>
              <code class="pb-3">pets</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">phone</span>
              <code class="pb-3">phone</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">phone_in_talk</span>
              <code class="pb-3">phone_in_talk</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">photo_camera</span>
              <code class="pb-3">photo_camera</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">picture_as_pdf</span>
              <code class="pb-3">picture_as_pdf</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">pie_chart</span>
              <code class="pb-3">pie_chart</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">play_arrow</span>
              <code class="pb-3">play_arrow</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">play_circle</span>
              <code class="pb-3">play_circle</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">podcasts</span>
              <code class="pb-3">podcasts</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">power</span>
              <code class="pb-3">power</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">power_settings_new</span>
              <code class="pb-3">power_settings_new</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">print</span>
              <code class="pb-3">print</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">priority_high</span>
              <code class="pb-3">priority_high</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">progress_activity</span>
              <code class="pb-3">progress_activity</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">public</span>
              <code class="pb-3">public</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">push_pin</span>
              <code class="pb-3">push_pin</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">qr_code</span>
              <code class="pb-3">qr_code</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">question_mark</span>
              <code class="pb-3">question_mark</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">radio_button_checked</span>
              <code class="pb-3">radio_button_checked</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">radio_button_unchecked</span>
              <code class="pb-3">radio_button_unchecked</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">recycling</span>
              <code class="pb-3">recycling</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">redo</span>
              <code class="pb-3">redo</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">refresh</span>
              <code class="pb-3">refresh</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">remove</span>
              <code class="pb-3">remove</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">remove_circle</span>
              <code class="pb-3">remove_circle</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">repeat</span>
              <code class="pb-3">repeat</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">reply</span>
              <code class="pb-3">reply</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">reply_all</span>
              <code class="pb-3">reply_all</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">restaurant</span>
              <code class="pb-3">restaurant</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">road</span>
              <code class="pb-3">road</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">rocket</span>
              <code class="pb-3">rocket</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">rocket_launch</span>
              <code class="pb-3">rocket_launch</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">rss_feed</span>
              <code class="pb-3">rss_feed</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">save</span>
              <code class="pb-3">save</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">schedule</span>
              <code class="pb-3">schedule</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">school</span>
              <code class="pb-3">school</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">science</span>
              <code class="pb-3">science</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">search</span>
              <code class="pb-3">search</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">security</span>
              <code class="pb-3">security</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">select_all</span>
              <code class="pb-3">select_all</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">sell</span>
              <code class="pb-3">sell</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">send</span>
              <code class="pb-3">send</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">sentiment_neutral</span>
              <code class="pb-3">sentiment_neutral</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">sentiment_sad</span>
              <code class="pb-3">sentiment_sad</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">sentiment_satisfied</span>
              <code class="pb-3">sentiment_satisfied</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">settings</span>
              <code class="pb-3">settings</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">settings_applications</span>
              <code class="pb-3">settings_applications</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">share</span>
              <code class="pb-3">share</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">shopping_bag</span>
              <code class="pb-3">shopping_bag</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">shopping_bag_speed</span>
              <code class="pb-3">shopping_bag_speed</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">shopping_basket</span>
              <code class="pb-3">shopping_basket</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">shopping_cart</span>
              <code class="pb-3">shopping_cart</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">shopping_cart_checkout</span>
              <code class="pb-3">shopping_cart_checkout</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">show_chart</span>
              <code class="pb-3">show_chart</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">shower</span>
              <code class="pb-3">shower</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">shuffle</span>
              <code class="pb-3">shuffle</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">sign_language</span>
              <code class="pb-3">sign_language</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">signal_cellular_4_bar</span>
              <code class="pb-3">signal_cellular_4_bar</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">signpost</span>
              <code class="pb-3">signpost</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">skip_next</span>
              <code class="pb-3">skip_next</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">skip_previous</span>
              <code class="pb-3">skip_previous</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">slideshow</span>
              <code class="pb-3">slideshow</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">smartphone</span>
              <code class="pb-3">smartphone</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">sort</span>
              <code class="pb-3">sort</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">sort_by_alpha</span>
              <code class="pb-3">sort_by_alpha</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">south</span>
              <code class="pb-3">south</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">south_east</span>
              <code class="pb-3">south_east</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">south_west</span>
              <code class="pb-3">south_west</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">speed</span>
              <code class="pb-3">speed</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">sports_bar</span>
              <code class="pb-3">sports_bar</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">sports_score</span>
              <code class="pb-3">sports_score</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">sports_soccer</span>
              <code class="pb-3">sports_soccer</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">square</span>
              <code class="pb-3">square</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">stacks</span>
              <code class="pb-3">stacks</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">stadia_controller</span>
              <code class="pb-3">stadia_controller</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">star</span>
              <code class="pb-3">star</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">star_half</span>
              <code class="pb-3">star_half</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">stethoscope</span>
              <code class="pb-3">stethoscope</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">sticky_note_2</span>
              <code class="pb-3">sticky_note_2</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">stop</span>
              <code class="pb-3">stop</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">stop_circle</span>
              <code class="pb-3">stop_circle</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">storage</span>
              <code class="pb-3">storage</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">streetview</span>
              <code class="pb-3">streetview</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">strikethrough_s</span>
              <code class="pb-3">strikethrough_s</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">stylus_laser_pointer</span>
              <code class="pb-3">stylus_laser_pointer</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">subdirectory_arrow_left</span>
              <code class="pb-3">subdirectory_arrow_left</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">subdirectory_arrow_right</span>
              <code class="pb-3">subdirectory_arrow_right</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">subscript</span>
              <code class="pb-3">subscript</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">subtitles</span>
              <code class="pb-3">subtitles</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">subway</span>
              <code class="pb-3">subway</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">superscript</span>
              <code class="pb-3">superscript</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">support</span>
              <code class="pb-3">support</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">swap_horiz</span>
              <code class="pb-3">swap_horiz</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">swap_vert</span>
              <code class="pb-3">swap_vert</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">sync_alt</span>
              <code class="pb-3">sync_alt</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">table_chart</span>
              <code class="pb-3">table_chart</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">tablet</span>
              <code class="pb-3">tablet</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">tag</span>
              <code class="pb-3">tag</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">terminal</span>
              <code class="pb-3">terminal</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">text_fields</span>
              <code class="pb-3">text_fields</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">text_wrap</span>
              <code class="pb-3">text_wrap</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">thumb_down</span>
              <code class="pb-3">thumb_down</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">thumb_up</span>
              <code class="pb-3">thumb_up</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">title</span>
              <code class="pb-3">title</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">toggle_off</span>
              <code class="pb-3">toggle_off</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">toggle_on</span>
              <code class="pb-3">toggle_on</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">toolbar</span>
              <code class="pb-3">toolbar</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">train</span>
              <code class="pb-3">train</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">transgender</span>
              <code class="pb-3">transgender</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">translate</span>
              <code class="pb-3">translate</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">travel</span>
              <code class="pb-3">travel</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">trophy</span>
              <code class="pb-3">trophy</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">tty</span>
              <code class="pb-3">tty</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">tune</span>
              <code class="pb-3">tune</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">tv</span>
              <code class="pb-3">tv</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">two_wheeler</span>
              <code class="pb-3">two_wheeler</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">umbrella</span>
              <code class="pb-3">umbrella</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">unarchive</span>
              <code class="pb-3">unarchive</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">undo</span>
              <code class="pb-3">undo</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">upload</span>
              <code class="pb-3">upload</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">usb</span>
              <code class="pb-3">usb</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">verified</span>
              <code class="pb-3">verified</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">video_file</span>
              <code class="pb-3">video_file</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">videocam</span>
              <code class="pb-3">videocam</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">view_column</span>
              <code class="pb-3">view_column</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">view_kanban</span>
              <code class="pb-3">view_kanban</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">view_list</span>
              <code class="pb-3">view_list</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">view_module</span>
              <code class="pb-3">view_module</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">visibility</span>
              <code class="pb-3">visibility</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">visibility_off</span>
              <code class="pb-3">visibility_off</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">volume_down</span>
              <code class="pb-3">volume_down</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">volume_off</span>
              <code class="pb-3">volume_off</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">volume_up</span>
              <code class="pb-3">volume_up</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">wand_stars</span>
              <code class="pb-3">wand_stars</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">warning</span>
              <code class="pb-3">warning</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">water_drop</span>
              <code class="pb-3">water_drop</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">west</span>
              <code class="pb-3">west</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">whatshot</span>
              <code class="pb-3">whatshot</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">width</span>
              <code class="pb-3">width</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">wifi</span>
              <code class="pb-3">wifi</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">work</span>
              <code class="pb-3">work</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">zoom_in</span>
              <code class="pb-3">zoom_in</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">zoom_out</span>
              <code class="pb-3">zoom_out</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">₪</span>
              <code class="pb-3">₪</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">Ⓡ</span>
              <code class="pb-3">Ⓡ</code>
          </div>
      </div>
      <div class="o_icon_card col-6 col-sm-4 col-md-3 mb-3">
          <div class="card text-center small">
              <span class="material-symbols-outlined fs-1 p-3">￦</span>
              <code class="pb-3">￦</code>
          </div>
      </div>
   </section>


