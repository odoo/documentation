
.. _enterprise_agreement_vi:

================================
Hợp đồng Đăng ký Odoo Enterprise
================================

.. only:: html

   `Tải xuống bản PDF <https://www.odoo.com/documentation/{CURRENT_BRANCH}/odoo_enterprise_agreement_vi.pdf>`_

.. warning::
   Đây là bản dịch Tiếng Việt của “Hợp đồng Đăng ký Odoo Enterprise”. Bản dịch này được cung cấp với
   hy vọng sẽ giúp bạn hiểu rõ các điều khoản, nhưng không có giá trị pháp lý. Bản chính thức duy
   nhất về các điều khoản của “Hợp đồng Đăng ký Odoo Enterprise” là :ref:`phiên bản gốc bằng tiếng
   Anh <enterprise_agreement>`.

.. note:: Phiên bản 11 - 2025-07-09

.. v6: add "App" definition + update pricing per-App
.. v7: remove possibility of price change at renewal after prior notice
.. 7.1: specify that 7% renewal increase applies to all charges, not just per-User.
.. v8.0: adapt for "Self-Hosting" + "Data Protection" for GDPR
.. v8a: minor wording changes, tuned User definition, + copyright guarantee
.. v9.0: add "Working with an Odoo Partner" + Maintenance of [Covered] Extra Modules + simplifications
.. v9a: clarification wrt second-level assistance for standard features
.. v9b: clarification that maintenance is opt-out + name of `cloc` command
.. v9c: minor wording changes, tuned User definition, + copyright guarantee (re-application of v8a changes
        on all branches)
.. v10: fall 2022 pricing change - removal of "per app" notions
.. v10a: clarified wording for Section 5.1 "(at that time)"
.. v11: add "25% extra fee for non-covered versions"; adapt Covered Version definition, service sections to
        clarify what happens with non-covered versions;
        for Data Protection, clarify that data deletion may be restricted by law (e.g. DK bookkeeping act)
.. v11a, 11b: clarify fee for non-covered versions in 5.1, and delay after LTS release.

Bằng cách đăng ký các dịch vụ Odoo Enterprise (“Dịch vụ”) được cung cấp bởi Odoo SA và các chi nhánh
(gọi chung là “Odoo SA”) liên quan đến Phiên bản Odoo Enterprise hoặc Phiên bản Odoo Community
(“Phần mềm”), được lưu trữ trên nền tảng Đám mây (“Nền tảng đám mây”) của Odoo SA hoặc tại chỗ
(“Tự lưu trữ”), bạn (“Khách hàng”) đồng ý bị ràng buộc bởi các điều khoản và điều kiện sau
(“Hợp đồng”).

.. _term_vi:

1 Thời hạn Hợp đồng
===================

Thời hạn của Hợp đồng này (“Thời hạn”) sẽ được quy định bằng văn bản khi ký kết Hợp đồng và bắt đầu
từ ngày ký kết. Hợp đồng sẽ được tự động gia hạn trong Thời hạn tương đương, trừ khi một trong hai
bên gửi văn bản thông báo chấm dứt cho bên kia trong tối thiểu 30 ngày trước khi kết thúc Thời hạn.

.. _definitions_vi:

2 Định nghĩa
============

Người dùng
    Bất kỳ tài khoản người dùng nào được xác định là đang hoạt động trong Phần mềm, có quyền truy
    cập vào chế độ tạo và/hoặc chỉnh sửa. Tài khoản người dùng đã hủy kích hoạt và tài khoản được
    sử dụng bởi những người bên ngoài (hoặc hệ thống), những người chỉ có quyền truy cập hạn chế vào
    Phần mềm thông qua các cổng thông tin (gọi là “Người dùng cổng thông tin”) không được tính là
    Người dùng.

Ứng dụng
    Một “Ứng dụng” là một nhóm các tính năng đặc thù có để cài đặt trong Phần mềm.

Đối tác Odoo
    Đối tác Odoo là một công ty hoặc cá nhân bên thứ ba, được Khách hàng lựa chọn và hợp tác để cung
    cấp các dịch vụ liên quan đến Odoo. Khách hàng có thể quyết định thay đổi Đối tác Odoo bất kỳ
    lúc nào, hoặc làm việc trực tiếp với Odoo SA (với điều kiện phải thông báo trước).

Phân hệ bổ sung
    Phân hệ bổ sung là một thư mục chứa các tệp mã nguồn hoặc một tập hợp các tùy chỉnh dựa trên
    Python được tạo trong cơ sở dữ liệu (ví dụ: với Odoo Studio), bổ sung các tính năng hoặc thay
    đổi hành vi tiêu chuẩn của Phần mềm. Nó có thể được phát triển bởi Khách hàng, bởi Odoo SA, bởi
    Đối tác Odoo thay mặt Khách hàng hoặc bởi các bên thứ ba.

Phân hệ bổ sung được bảo đảm
    Phân hệ bổ sung được bảo đảm là Phân hệ bổ sung mà Khách hàng chọn trả phí bảo trì để nhận các
    dịch vụ hỗ trợ, nâng cấp và sửa lỗi.

Lỗi
    Lỗi là bất kỳ sự cố nào của Phần mềm hoặc của Phân hệ Bổ sung được Bảo đảm dẫn đến việc dừng
    hoàn toàn, xuất hiện lỗi traceback hoặc vi phạm bảo mật và không trực tiếp gây ra do cài đặt
    hoặc cấu hình bị lỗi.
    Việc không tuân thủ các thông số kỹ thuật hoặc yêu cầu sẽ được coi là Lỗi theo quyết định của
    Odoo SA (thông thường, khi Phần mềm không tạo ra kết quả hoặc hiệu suất theo đúng thiết kế hoặc
    khi một tính năng đặc thù theo quốc gia không còn đáp ứng các yêu cầu pháp lý về kế toán).

Phiên bản được bảo đảm
    Ba phiên bản chính được phát hành gần đây nhất của Phần mềm. Mỗi phiên bản chính mới được phát
    hành một lần mỗi năm.

Gói đăng ký
    Gói đăng ký xác định một tập hợp các Ứng dụng, tính năng và giải pháp lưu trữ được áp dụng trong
    Hợp đồng này và được quy định bằng văn bản khi ký kết Hợp đồng.


.. _enterprise_access_vi:

3 Quyền truy cập vào phần mềm
=============================

Khách hàng có thể sử dụng Phần mềm được lưu trữ trên Nền tảng Đám mây hoặc chọn phương án Tự lưu
trữ. Nền tảng đám mây được Odoo SA lưu trữ và toàn quyền quản lý, và được Khách hàng truy cập từ xa.
Với tùy chọn Tự lưu trữ, Khách hàng lưu trữ Phần mềm trên các hệ thống máy tính mà họ lựa chọn,
không thuộc quyền kiểm soát của Odoo SA.

Trong thời hạn của Hợp đồng này, Odoo SA cấp cho Khách hàng giấy phép không độc quyền, không thể
chuyển nhượng để sử dụng (triển khai, sửa đổi, triển khai sau khi sửa đổi) phần mềm Phiên bản Odoo
Enterprise, theo các điều khoản nêu trong mục :ref:`appendix_a_vi`.

Khách hàng đồng ý thực hiện mọi biện pháp cần thiết để đảm bảo phần mềm không bị chỉnh sửa ở những
phần dùng để kiểm tra tính hợp lệ của việc sử dụng Phiên bản Odoo Enterprise và thu thập số liệu
thống kê cho mục đích này, bao gồm nhưng không giới hạn ở việc theo dõi phiên bản đang chạy, số
lượng người dùng, các ứng dụng đã cài đặt và số dòng mã của các Phân hệ bổ sung được bảo đảm.

Odoo SA cam kết không tiết lộ thông tin cá nhân hoặc định danh cho bên thứ ba mà không có sự đồng ý
của Khách hàng và xử lý tất cả dữ liệu thu thập được theo Chính sách Quyền riêng tư chính thức
được công bố tại https://www.odoo.com/privacy.

Khi Hợp đồng này hết hạn hoặc chấm dứt, giấy phép này sẽ bị thu hồi ngay lập tức và Khách hàng đồng
ý ngừng sử dụng phần mềm Phiên bản Odoo Enterprise và Nền tảng đám mây.

Nếu Khách hàng vi phạm các điều khoản của mục này, Khách hàng đồng ý thanh toán cho Odoo SA một
khoản phí bổ sung bằng 300% giá niêm yết áp dụng cho số lượng Người dùng thực tế.


.. _services_vi:

4 Dịch vụ
=========

.. _bugfix_vi:

4.1 Dịch vụ sửa lỗi
-------------------

Trong thời hạn của Hợp đồng này, Odoo SA cam kết thực hiện mọi nỗ lực có thể để khắc phục bất kỳ
Lỗi nào của Phần mềm và các Phân hệ bổ sung được bảo đảm mà Khách hàng gửi qua kênh thích hợp
(thường là biểu mẫu trên trang web hoặc số điện thoại được liệt kê trên
`odoo.com/help <https://www.odoo.com/help>`_, hoặc nếu làm việc với Đối tác Odoo thì thông qua kênh
do đối tác cung cấp) và bắt đầu xử lý các yêu cầu của Khách hàng trong vòng 2 ngày làm việc.

Ngay khi Lỗi được xử lý, một biện pháp khắc phục thích hợp sẽ được thông báo cho Khách hàng. Nếu
Khách hàng không sử dụng một Phiên bản được bảo đảm, họ có thể được yêu cầu thực hiện biện pháp khắc
phục Lỗi bằng cách nâng cấp lên Phiên bản được bảo đảm gần đây hơn của Phần mềm.

Khi một Lỗi được khắc phục trong bất kỳ Phiên bản được bảo đảm nào, Odoo SA cam kết sẽ sửa Lỗi
trong tất cả các Phiên bản được bảo đảm gần đây hơn của Phần mềm.

Cả hai bên thừa nhận rằng theo quy định trong giấy phép sử dụng Phần mềm và trong mục
:ref:`liability_vi` của Hợp đồng này, Odoo SA không chịu trách nhiệm pháp lý đối với Lỗi trong Phần
mềm hoặc trong các Phân hệ bổ sung được bảo đảm.


4.2 Dịch vụ cập nhật bảo mật
----------------------------

.. _secu_self_hosting_vi:

Tự lưu trữ
~~~~~~~~~~

Trong thời hạn của Hợp đồng này, Odoo SA cam kết gửi cho Khách hàng “Thông báo Bảo mật” đối với bất
kỳ Lỗi bảo mật nào được phát hiện trong các Phiên bản được bảo đảm của Phần mềm (không bao gồm Phân
hệ bổ sung), ít nhất 2 tuần trước khi công bố Thông báo Bảo mật ra công chúng, trừ khi Lỗi đã được
bên thứ ba tiết lộ công khai.
Thông báo Bảo mật bao gồm mô tả đầy đủ về Lỗi, nguyên nhân, các tác động tiềm ẩn đến hệ thống của
Khách hàng, và biện pháp khắc phục tương ứng cho từng Phiên bản được bảo đảm.

Khách hàng hiểu rằng Lỗi và các thông tin trong Thông báo Bảo mật phải được xử lý như Thông tin bảo
mật theo quy định tại mục :ref:`confidentiality_vi` trong thời gian bị hạn chế trước khi công bố
công khai.

.. _secu_cloud_platform_vi:

Nền tảng đám mây
~~~~~~~~~~~~~~~~

Odoo SA cam kết sẽ áp dụng các biện pháp khắc phục bảo mật đối với bất kỳ Lỗi bảo mật nào được phát
hiện trong phiên bản Phần mềm được lưu trữ trên Nền tảng đám mây, trên tất cả các hệ thống thuộc
quyền kiểm soát của mình, ngay khi biện pháp khắc phục đó khả dụng, mà không yêu cầu Khách hàng
thực hiện bất kỳ thao tác thủ công nào.


.. _upgrade_vi:

4.3 Dịch vụ nâng cấp
--------------------

.. _upgrade_odoo_vi:

Dịch vụ nâng cấp phần mềm
~~~~~~~~~~~~~~~~~~~~~~~~~

Trong thời hạn của Hợp đồng này, Khách hàng có thể gửi yêu cầu nâng cấp thông qua kênh thích hợp
(thường là trang web dịch vụ nâng cấp của Odoo SA), để chuyển đổi cơ sở dữ liệu của Phần mềm từ bất
kỳ phiên bản Phần mềm nào sang Phiên bản được bảo đảm mới hơn (“Phiên bản mục tiêu”).

Đối với Nền tảng đám mây, yêu cầu nâng cấp được gửi trực tiếp từ bảng điều khiển của Nền tảng đám
mây và không yêu cầu tải dữ liệu lên. Đối với Tự lưu trữ, yêu cầu nâng cấp phải bao gồm một bản sao
cơ sở dữ liệu của Khách hàng và dữ liệu liên quan (thường lấy từ menu Sao lưu của Phần mềm).

Dịch vụ này được cung cấp thông qua một nền tảng tự động để cho phép Khách hàng thực hiện nâng cấp
không cần giám sát sau khi phiên bản cơ sở dữ liệu trước đó của Khách hàng đã được nâng cấp thành
công thành một Phiên bản được bảo đảm.

Dịch vụ nâng cấp chỉ giới hạn trong việc chuyển đổi kỹ thuật và điều chỉnh cơ sở dữ liệu của Khách
hàng cho tương thích với Phiên bản mục tiêu, sửa mọi Lỗi do hoạt động nâng cấp trực tiếp gây ra và
không thường xảy ra trong Phiên bản mục tiêu, và chuyển đổi mã nguồn cũng như dữ liệu của các Phân
hệ bổ sung được bảo đảm cho Phiên bản mục tiêu.

Khách hàng có trách nhiệm xác minh và xác thực cơ sở dữ liệu được nâng cấp để phát hiện Lỗi,
phân tích tác động của các thay đổi và tính năng mới được triển khai trong Phiên bản mục tiêu,
và để chuyển đổi cũng như điều chỉnh Phiên bản mục tiêu cho tương thích với bất kỳ tiện ích mở
rộng Phần mềm nào của bên thứ ba đã được cài đặt trong cơ sở dữ liệu trước khi nâng cấp (ví dụ:
Phân hệ bổ sung không được bảo đảm). Khách hàng có thể gửi nhiều yêu cầu nâng cấp cho một cơ sở dữ
liệu, cho đến khi đạt được kết quả chấp nhận được.

.. _cloud_hosting_vi:

4.4 Dịch vụ lưu trữ đám mây
---------------------------

Trong thời hạn của Hợp đồng này, khi Khách hàng chọn sử dụng Nền tảng đám mây, Odoo SA cam kết cung
cấp ít nhất các dịch vụ sau:

- Lựa chọn nhiều khu vực lưu trữ (tối thiểu 3: Châu Âu, Châu Mỹ, Châu Á/Thái Bình Dương)
- Lưu trữ tại các trung tâm dữ liệu đạt chuẩn Tier-III hoặc tương đương, với thời gian hoạt động
  mạng đạt 99,9%
- Mã hóa giao tiếp SSL loại A (HTTPS)
- Sao lưu tự động hoàn toàn, được xác minh và nhân bản tại nhiều khu vực
- Kế hoạch khôi phục sau thảm họa, được kiểm tra định kỳ

Chi tiết về Dịch vụ lưu trữ đám mây được mô tả trên trang Thỏa thuận Mức độ Dịch vụ tại
https://www.odoo.com/cloud-sla.


.. _support_service_vi:

4.5 Dịch vụ hỗ trợ
------------------

Phạm vi
~~~~~~~

Trong thời hạn của Hợp đồng này, Khách hàng có thể tạo phiếu hỗ trợ miễn phí, không giới hạn, dành
riêng cho các câu hỏi liên quan đến Lỗi (xem :ref:`bugfix_vi`) hoặc hướng dẫn sử dụng các tính năng
tiêu chuẩn của Phần mềm và Phân hệ bổ sung được bảo đảm.

Những yêu cầu hỗ trợ khác, chẳng hạn như các câu hỏi liên quan đến phát triển hoặc tùy chỉnh có thể
được xử lý thông qua việc mua một hợp đồng dịch vụ riêng.
Trong trường hợp không rõ liệu một yêu cầu có được áp dụng theo Hợp đồng này hay không, quyết định
sẽ do Odoo SA toàn quyền xem xét.

Kênh liên hệ
~~~~~~~~~~~~

Phiếu hỗ trợ có thể được gửi qua biểu mẫu trên trang web hoặc số điện thoại được liệt kê tại
`odoo.com/help <https://www.odoo.com/help>`_, hoặc nếu làm việc với Đối tác của Odoo thì thông qua
kênh do đối tác cung cấp, tuỳ theo giờ làm việc địa phương.


.. _maintenance_partner_vi:

4.6 Làm việc với Đối tác của Odoo
---------------------------------

Đối với các dịch vụ sửa lỗi, hỗ trợ và nâng cấp, Khách hàng có thể làm việc với Đối tác của Odoo
với tư cách là đầu mối liên hệ chính hoặc làm việc trực tiếp với Odoo SA.

Nếu Khách hàng quyết định làm việc với Đối tác của Odoo, thì Odoo SA sẽ chuyển giao các dịch vụ
liên quan đến các Phân hệ bổ sung được bảo đảm cho Đối tác của Odoo, đầu mối liên hệ chính của khách
hàng. Đối tác của Odoo có thể thay mặt khách hàng liên hệ với Odoo SA để được hỗ trợ cấp độ hai về
các tính năng Phần mềm tiêu chuẩn.

Nếu Khách hàng quyết định làm việc trực tiếp với Odoo SA, thì các dịch vụ liên quan đến Phân hệ bổ
sung được bảo đảm sẽ được cung cấp *khi và chỉ khi* Khách hàng lưu trữ trên Nền tảng đám mây Odoo.


.. _charges_vi:

5 Phí và lệ phí
===============

.. _charges_standard_vi:

5.1 Phí tiêu chuẩn
------------------

Các khoản phí tiêu chuẩn của gói đăng ký Odoo Enterprise và Dịch vụ dựa trên số lượng Người dùng và
Gói đăng ký mà Khách hàng sử dụng và được quy định bằng văn bản khi ký kết Hợp đồng.

Trong Thời hạn hợp đồng, nếu Khách hàng có nhiều Người dùng hơn hoặc sử dụng các tính năng yêu cầu
Gói đăng ký khác so với quy định tại thời điểm ký kết Hợp đồng này, thì Khách hàng đồng ý trả thêm
một khoản lệ phí tương đương với giá niêm yết áp dụng (tại thời điểm phát sinh chênh lệch so với số
lượng Người dùng hoặc Gói đăng ký được chỉ định) cho Người dùng bổ sung hoặc Gói đăng ký cần thiết,
trong Thời hạn hợp đồng còn lại.

Mỗi năm một lần, và không sớm hơn 6 tháng kể từ khi phát hành một phiên bản chính mới của Phần mềm,
nếu cơ sở dữ liệu của Khách hàng đang ở phiên bản cũ hơn các Phiên bản được bảo đảm, Khách hàng đồng
ý thanh toán một khoản phí bổ sung bằng 25% của giá trị hàng năm, được tính dựa trên giá hiện tại
cho mỗi Người dùng và số lượng Người dùng của Khách hàng.

Ngoài ra, dịch vụ dành cho các Phân hệ bổ sung được bảo đảm được tính phí dựa trên số lượng dòng mã
trong các Phân hệ này. Khi Khách hàng chọn bảo trì các Phân hệ bổ sung được bảo đảm, phí được tính
hàng tháng cho mỗi 100 dòng mã (làm tròn đến hàng trăm tiếp theo), theo quy định bằng văn bản khi
ký kết Hợp đồng. Các dòng mã sẽ được tính bằng lệnh ``cloc`` của Phần mềm và bao gồm tất cả dòng
văn bản trong mã nguồn của các Phân hệ đó, bất kể ngôn ngữ lập trình (Python, Javascript, XML,...),
ngoại trừ dòng trống, dòng nhận xét và tệp không tải được khi cài đặt hoặc triển khai Phần mềm.

của Phần mềm và bao gồm tất cả dòng văn bản trong mã nguồn của các Phân hệ đó, bất kể ngôn ngữ lập
trình (Python, Javascript, XML,...), ngoại trừ dòng trống, dòng nhận xét và tệp không tải được khi
cài đặt hoặc triển khai Phần mềm.

.. _charges_renewal_vi:

5.2 Phí gia hạn
---------------

Khi gia hạn như được đề cập trong mục :ref:`term_vi`, nếu các khoản phí áp dụng trong Thời hạn
trước đó (không bao gồm bất kỳ khoản phí bổ sung nào do sử dụng phiên bản không được bảo đảm) thấp
hơn giá niêm yết áp dụng hiện hành, thì các khoản phí này sẽ được tăng lên tối đa 7%.

.. _taxes_vi:

5.3 Thuế
--------

Mọi khoản lệ phí và phí đều chưa bao gồm các loại thuế, lệ phí hoặc phí liên bang, tỉnh, bang, địa
phương hoặc chính phủ khác (gọi chung là “Thuế”) hiện hành. Khách hàng chịu trách nhiệm thanh toán
tất cả các khoản Thuế liên quan đến những giao dịch mua hàng do Khách hàng thực hiện theo Hợp đồng
này, trừ khi Odoo SA có nghĩa vụ pháp lý trong việc thanh toán hoặc thu các khoản Thuế mà Khách
hàng phải trả.


.. _conditions_vi:

6 Điều kiện dịch vụ
===================

6.1 Nghĩa vụ của Khách hàng
---------------------------

Khách hàng đồng ý:

- Thanh toán cho Odoo SA mọi khoản phí áp dụng cho Dịch vụ của Hợp đồng này, theo các điều kiện
  thanh toán được quy định khi ký kết hợp đồng;
- Thông báo ngay cho Odoo SA khi số lượng Người dùng thực tế vượt quá số lượng được xác định khi ký
  kết Hợp đồng, và trong trường hợp đó, thanh toán khoản phí bổ sung áp dụng theo quy định tại mục
  :ref:`charges_standard_vi`;
- Thực hiện mọi biện pháp cần thiết để đảm bảo phần mềm không bị chỉnh sửa ở những phần dùng để
  kiểm tra tính hợp lệ của việc sử dụng Phiên bản Odoo Enterprise, như được nêu trong mục
  :ref:`enterprise_access_vi`;
- Chỉ định 1 đại diện liên hệ riêng trong toàn bộ thời gian Hợp đồng;
- Gửi thông báo bằng văn bản cho Odoo SA trước 30 ngày nếu thay đổi điểm liên hệ chính để làm việc
  với một Đối tác Odoo khác, hoặc để làm việc trực tiếp với Odoo SA.

Khi Khách hàng chọn sử dụng Nền tảng đám mây, Khách hàng đồng ý thêm:

- Thực hiện mọi biện pháp hợp lý để bảo mật tài khoản người dùng, bao gồm chọn một mật khẩu mạnh
  và không chia sẻ mật khẩu với bất kỳ ai;
- Sử dụng Dịch vụ lưu trữ một cách hợp lý để loại trừ mọi hoạt động bất hợp pháp hoặc lạm dụng và
  tuyệt đối tuân thủ các quy tắc được nêu trong Chính sách sử dụng được chấp nhận đăng tại
  https://www.odoo.com/acceptable-use.

Khi Khách hàng chọn tùy chọn Tự lưu trữ, Khách hàng đồng ý thêm:

- Thực hiện mọi biện pháp hợp lý để bảo vệ các tệp và cơ sở dữ liệu của Khách hàng và để đảm bảo dữ
  liệu của Khách hàng được an toàn và bảo mật, đồng thời thừa nhận rằng Odoo SA không chịu trách
  nhiệm đối với bất kỳ sự mất mát dữ liệu nào;
- Cấp quyền truy cập cần thiết cho Odoo SA để xác minh tính hợp lệ của việc sử dụng Phiên bản Odoo
  Enterprise khi được yêu cầu (ví dụ: trong trường hợp xác minh tự động không hoạt động đối
  với Khách hàng).


.. _no_soliciting_vi:

6.2 Không lôi kéo hoặc tuyển dụng
---------------------------------

Trừ khi có sự đồng ý bằng văn bản của bên kia, mỗi bên, các công ty liên kết và đại diện của mình
đồng ý không lôi kéo hoặc đề nghị tuyển dụng bất kỳ nhân viên nào của bên kia đang tham gia thực
hiện hoặc sử dụng các Dịch vụ theo Hợp đồng này, trong suốt thời hạn của Hợp đồng và trong vòng
12 tháng kể từ ngày chấm dứt hoặc hết hạn Hợp đồng. Trong trường hợp vi phạm điều khoản này dẫn đến
việc nhân viên nói trên nghỉ việc vì lý do đó, bên vi phạm đồng ý thanh toán cho bên kia một khoản
tiền là 30.000 EUR (€) (ba mươi nghìn euro).


.. _publicity_vi:

6.3 Công khai thông tin
-----------------------

Trừ khi có thông báo bằng văn bản khác, mỗi bên cấp cho bên kia giấy phép không chuyển nhượng,
không độc quyền, miễn phí bản quyền, có hiệu lực toàn cầu để sao chép và hiển thị tên, logo và
nhãn hiệu của bên kia, chỉ nhằm mục đích giới thiệu bên kia với vai trò là khách hàng hoặc nhà
cung cấp, trên các trang web, thông cáo báo chí và tài liệu marketing khác.


.. _confidentiality_vi:

6.4 Bảo mật
-----------

Định nghĩa về "Thông tin bảo mật":
    Tất cả thông tin do một bên (gọi là “Bên tiết lộ”) cung cấp cho bên kia (gọi là “Bên nhận”),
    dù bằng lời nói hay bằng văn bản, được xác định là bảo mật hoặc được hiểu một cách hợp lý là
    bảo mật dựa trên bản chất của thông tin và hoàn cảnh tiết lộ. Đặc biệt, mọi thông tin liên quan
    đến hoạt động kinh doanh, công việc, sản phẩm, phát triển, bí mật thương mại, bí quyết, nhân sự,
    khách hàng và nhà cung cấp của mỗi bên đều được xem là thông tin bảo mật.

Đối với tất cả Thông tin bảo mật nhận được trong thời hạn của Hợp đồng này, Bên nhận sẽ sử dụng mức
độ bảo mật tương đương với mức độ mà họ áp dụng để bảo vệ thông tin bảo mật tương tự của chính mình,
nhưng không thấp hơn mức độ hợp lý.

Bên nhận có thể tiết lộ Thông tin bảo mật của Bên tiết lộ trong phạm vi bị pháp luật bắt buộc phải
tiết lộ, với điều kiện Bên nhận phải thông báo trước cho Bên tiết lộ về việc tiết lộ bắt buộc đó,
trong phạm vi được pháp luật cho phép.


.. _data_protection_vi:

6.5 Bảo vệ dữ liệu
------------------

Định nghĩa
    “Dữ liệu cá nhân”, “Bên kiểm soát”, “Xử lý” có cùng ý nghĩa như được quy định trong Quy định
    (EU) 2016/679 và Chỉ thị 2002/58/EC, cũng như bất kỳ quy định hoặc văn bản pháp luật nào sửa
    đổi hoặc thay thế các văn bản này (sau đây được gọi là “Luật Bảo vệ Dữ liệu”).

Xử lý dữ liệu cá nhân
~~~~~~~~~~~~~~~~~~~~~

Các bên thừa nhận rằng cơ sở dữ liệu của Khách hàng có thể chứa Dữ liệu cá nhân, trong đó Khách
hàng đóng vai trò là Bên kiểm soát. Dữ liệu này sẽ được Odoo SA xử lý khi có chỉ dẫn từ Khách hàng,
thông qua việc sử dụng bất kỳ Dịch vụ nào yêu cầu cơ sở dữ liệu (ví dụ: Dịch vụ lưu trữ đám mây
hoặc Dịch vụ nâng cấp cơ sở dữ liệu), hoặc khi Khách hàng chuyển giao toàn bộ hoặc một phần cơ sở
dữ liệu của mình cho Odoo SA vì bất kỳ lý do nào liên quan đến Hợp đồng này.

Quá trình xử lý này sẽ được thực hiện theo Luật Bảo vệ Dữ liệu. Cụ thể, Odoo SA cam kết:

- (a) Chỉ xử lý Dữ liệu cá nhân khi có và theo chỉ thị của Khách hàng, và với mục đích thực hiện
  một trong các Dịch vụ theo Hợp đồng này, trừ khi pháp luật yêu cầu, trong trường hợp đó, Odoo SA
  sẽ thông báo trước cho Khách hàng, trừ khi luật pháp không cho phép;
- (b) Đảm bảo rằng tất cả những người trong Odoo SA được ủy quyền xử lý Dữ liệu Cá nhân đều cam
  kết giữ bí mật;
- (c) Triển khai và duy trì các biện pháp kỹ thuật cũng như tổ chức thích hợp để bảo vệ Dữ liệu cá
  nhân, tránh tình trạng xử lý trái phép hoặc bất hợp pháp, hoặc vô tình làm mất, phá hủy, hư hỏng,
  trộm cắp, thay đổi hoặc tiết lộ;
- (d) Chuyển ngay cho Khách hàng mọi yêu cầu Bảo vệ dữ liệu liên quan đến cơ sở dữ liệu của Khách
  hàng đã được gửi tới Odoo SA;
- (e) Thông báo kịp thời cho Khách hàng khi nhận thức được và xác nhận bất kỳ việc xử lý, tiết lộ
  hoặc truy cập Dữ liệu cá nhân một cách vô tình, trái phép hoặc bất hợp pháp;
- (f) Thông báo cho Khách hàng nếu các chỉ dẫn xử lý vi phạm Luật Bảo vệ Dữ liệu hiện hành, theo
  quan điểm của Odoo SA;
- (g) Cung cấp cho Khách hàng tất cả thông tin cần thiết để chứng minh sự tuân thủ Luật Bảo vệ Dữ
  liệu, cho phép và đóng góp hợp lý vào các cuộc kiểm toán, bao gồm cả việc kiểm tra, do Khách hàng
  tiến hành hoặc ủy quyền;
- (h) Xóa vĩnh viễn tất cả bản sao cơ sở dữ liệu của Khách hàng do Odoo SA sở hữu, hoặc trả lại dữ
  liệu đó, theo lựa chọn của Khách hàng, khi chấm dứt Hợp đồng này, có thể chậm trễ theo quy định
  trong `Chính sách Quyền riêng tư <https://www.odoo.com/vi_VN/privacy>`_ của Odoo SA, trừ khi
  Odoo SA có nghĩa vụ pháp lý phải lưu trữ dữ liệu. Trong trường hợp đó, Odoo SA cam kết chỉ xử lý
  Dữ liệu cá nhân cho các mục đích và trong thời gian được pháp luật yêu cầu.

Đối với các điểm (d) đến (f), Khách hàng đồng ý luôn cung cấp cho Odoo SA thông tin liên hệ chính
xác, nếu cần thiết để thông báo về việc Bảo vệ dữ liệu của Khách hàng.

Bên xử lý phụ
~~~~~~~~~~~~~

Khách hàng thừa nhận và đồng ý rằng để cung cấp Dịch vụ, Odoo SA có thể sử dụng các nhà cung cấp
dịch vụ bên thứ ba (gọi là “Bên xử lý phụ”) để xử lý Dữ liệu cá nhân. Odoo SA cam kết chỉ sử dụng
các Bên xử lý phụ theo Luật Bảo vệ Dữ liệu. Việc sử dụng này sẽ được điều chỉnh bởi hợp đồng giữa
Odoo SA và Bên xử lý phụ cung cấp các đảm bảo cho mục đích đó. Chính sách Quyền riêng tư của Odoo
SA, được đăng tại https://www.odoo.com/privacy cung cấp thông tin mới nhất về tên và mục đích của
các Bên xử lý phụ hiện đang được Odoo SA sử dụng để thực hiện Dịch vụ.


.. _termination_vi:

6.6 Chấm dứt
------------

Trong trường hợp một trong hai Bên không hoàn thành bất kỳ nghĩa vụ nào theo Hợp đồng này và nếu
vi phạm đó không được khắc phục trong vòng 30 ngày theo lịch kể từ ngày thông báo vi phạm bằng văn
bản, thì Bên không vi phạm có thể chấm dứt Hợp đồng này ngay lập tức.

Ngoài ra, Odoo SA có quyền chấm dứt Hợp đồng ngay lập tức nếu Khách hàng không thanh toán các khoản
phí áp dụng cho Dịch vụ trong vòng 21 ngày kể từ ngày đến hạn được ghi trên hóa đơn tương ứng, sau
khi đã gửi tối thiểu 3 lần nhắc nhở.

Các điều khoản tiếp tục có hiệu lực:
  Các mục “:ref:`confidentiality_vi`”, “:ref:`disclaimers_vi`”, “:ref:`liability_vi`” và
  “:ref:`general_provisions_vi`” sẽ tiếp tục có hiệu lực sau khi Hợp đồng này chấm dứt hoặc hết hạn.


.. _warranties_disclaimers_vi:

7 Bảo đảm, tuyên bố từ chối trách nhiệm, trách nhiệm pháp lý
============================================================

.. _warranties_vi:

7.1 Bảo đảm
-----------

Odoo SA sở hữu bản quyền hoặc quyền tương đương [#cla1]_ đối với 100% mã của Phần mềm và xác nhận
rằng tất cả thư viện phần mềm cần cho việc sử dụng Phần mềm đều có sẵn theo giấy phép tương thích
với giấy phép Phần mềm.

Trong thời hạn của Hợp đồng này, Odoo SA cam kết nỗ lực hợp lý về mặt thương mại để thực hiện Dịch
vụ phù hợp với các tiêu chuẩn ngành được chấp nhận rộng rãi, với điều kiện

- Hệ thống máy tính của Khách hàng đang hoạt động tốt, và đối với phương án Tự lưu trữ, Phần mềm
  được cài đặt trong một môi trường vận hành phù hợp;
- Khách hàng cung cấp đầy đủ thông tin cần thiết để xử lý sự cố và, đối với Tự lưu trữ, cấp quyền
  truy cập cần thiết để Odoo SA xác định, tái tạo và khắc phục sự cố;
- Tất cả các khoản thanh toán cho Odoo SA đã được thực hiện.

Biện pháp khắc phục duy nhất và độc quyền của Khách hàng và nghĩa vụ duy nhất của Odoo SA đối với
mọi hành vi vi phạm bảo đảm này là Odoo SA tiếp tục thực hiện các Dịch vụ mà không tính thêm phí.


.. [#cla1] Các đóng góp bên ngoài có trong `Hợp đồng Cấp phép Bản quyền
           <https://www.odoo.com/cla>`_, cung cấp giấy phép bản quyền và bằng sáng chế vĩnh viễn,
           miễn phí và không thể hủy ngang cho Odoo SA.

.. _disclaimers_vi:

7.2 Tuyên bố từ chối trách nhiệm
--------------------------------

Ngoại trừ những gì được quy định rõ ràng trong Hợp đồng này, mỗi bên đều không đưa ra bất kỳ bảo
đảm nào dưới bất kỳ hình thức nào, dù là bảo đảm rõ ràng, ngụ ý, theo luật định hay hình thức khác.
Mỗi bên đều từ chối mọi bảo đảm ngụ ý, bao gồm nhưng không giới hạn ở bảo đảm về khả năng thương
mại, sự phù hợp với mục đích cụ thể hoặc không vi phạm quyền, trong phạm vi tối đa được pháp luật
hiện hành cho phép.

Odoo SA không bảo đảm rằng Phần mềm tuân thủ bất kỳ quy định pháp luật nào ở cấp địa phương hoặc
quốc tế.

.. _liability_vi:

7.3 Giới hạn trách nhiệm
------------------------

Trong phạm vi tối đa được pháp luật cho phép, tổng trách nhiệm của mỗi bên cùng với các công ty
liên kết của mình phát sinh từ hoặc liên quan đến Hợp đồng này sẽ không vượt quá 50% tổng số tiền
mà Khách hàng đã thanh toán theo Hợp đồng trong vòng 12 tháng ngay trước ngày xảy ra sự kiện dẫn
đến khiếu nại. Việc có nhiều khiếu nại sẽ không làm tăng giới hạn này.

Trong mọi trường hợp, không bên nào hoặc các công ty liên kết của bên đó phải chịu trách nhiệm
đối với bất kỳ thiệt hại gián tiếp, đặc biệt, mang tính trừng phạt, ngẫu nhiên hoặc hậu quả nào
dưới bất kỳ hình thức nào, bao gồm nhưng không giới hạn ở tổn thất doanh thu, lợi nhuận, tiết kiệm,
mất cơ hội kinh doanh hoặc tổn thất tài chính khác, chi phí đình trệ hoặc chậm trễ, mất hoặc hỏng
dữ liệu, phát sinh từ hoặc liên quan đến Hợp đồng này, bất kể hình thức khiếu nại là hợp đồng, dân
sự hay hình thức khác, ngay cả khi bên đó hoặc các công ty liên kết đã được thông báo về khả năng
xảy ra thiệt hại đó, hoặc khi biện pháp khắc phục của bên đó hoặc các công ty liên kết không đạt
được mục đích thiết yếu.

.. _force_majeure_vi:

7.4 Trường hợp bất khả kháng
----------------------------

Không bên nào phải chịu trách nhiệm với bên kia về sự chậm trễ trong thực hiện hoặc không thực hiện
bất kỳ nghĩa vụ nào theo Hợp đồng này nếu nguyên nhân của sự chậm trễ hoặc không thực hiện đó là
do trường hợp *bất khả kháng*, chẳng hạn như quy định của chính phủ, hỏa hoạn, đình công, chiến
tranh, lũ lụt, tai nạn, dịch bệnh, lệnh cấm vận, việc bị chính phủ hoặc cơ quan công quyền
trưng dụng toàn bộ hoặc một phần nhà máy hoặc sản phẩm, hoặc bất kỳ nguyên nhân nào khác,
cho dù bản chất giống hay khác, nằm ngoài khả năng kiểm soát hợp lý của bên đó, miễn là nguyên
nhân đó vẫn còn tồn tại.


.. _general_provisions_vi:

8 Điều khoản chung
==================

.. _governing_law_vi:

8.1 Luật điều chỉnh
-------------------

Hợp đồng này và tất cả các đơn đặt hàng của Khách hàng sẽ tuân theo luật pháp Bỉ. Mọi tranh chấp
phát sinh từ hoặc liên quan đến Hợp đồng này hay mọi đơn đặt hàng của Khách hàng sẽ tuân theo quyền
tài phán riêng của Tòa án Kinh doanh Nivelles.


.. _severability_vi:

8.2 Tính độc lập của điều khoản
-------------------------------

Trong trường hợp một hoặc nhiều điều khoản của Hợp đồng này hoặc việc áp dụng chúng bị coi là vô
hiệu, trái pháp luật hoặc không thể thực thi dưới bất kỳ hình thức nào, thì tính hợp lệ, tính pháp
lý và khả năng thực thi của các điều khoản còn lại của Hợp đồng này và việc áp dụng chúng sẽ không
bị ảnh hưởng hoặc suy giảm. Hai bên cam kết thay thế bất kỳ điều khoản nào bị vô hiệu, trái pháp
luật hoặc không thể thực thi bằng một điều khoản hợp lệ có cùng hiệu lực và mục tiêu.


.. _appendix_a_vi:

9 Phụ lục A: Giấy phép Phiên bản Odoo Enterprise
================================================

.. only:: latex

    Phiên bản Odoo Enterprise được cấp phép theo Giấy phép Phiên bản Odoo Enterprise v1.0,
    được định nghĩa như sau:

    .. highlight:: none

    .. literalinclude:: ../../licenses/enterprise_license.txt

.. only:: html

    Xem :ref:`odoo_enterprise_license`.
