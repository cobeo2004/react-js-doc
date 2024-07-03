---
sidebar_position: 1
slug: intro-to-javascript
title: Sơ lược về JavaScript
authors: Simon
tags: [introduction]
---

:::warning

- Anh em có thể đọc phần này để biết sâu hơn về JavaScript và tính ứng dụng của nó trong thực tiễn như thế nào thôi nhé.
- Nếu anh em đã nắm rõ JavaScript rồi thì có thể đi tới phần [Cài đặt môi trường](/docs/intro.md).
  :::

## Vậy rốt cuộc JavaScript là cái quái gì ?

Được phát triển bởi Brendan Eich tại Netscape vào năm 1995, JavaScript là một ngôn ngữ lập trình linh hoạt và phổ biến.
Ban đầu, nó được thiết kế để thêm tính năng tương tác vào các trang web, giúp cho các trang web trở nên sống động và
tương tác hơn.
:::info
**JavaScript khác với Java, dù tên của chúng có phần giống nhau.**
:::

<h2>Lịch sử và sự phát triển </h2>
JavaScript đã trải qua nhiều giai đoạn phát triển và nâng cấp kể từ khi ra đời. Các phiên bản hiện đại của JavaScript **được duy trì và phát triển bởi tổ chức ECMA International với tên gọi chính thức là ECMAScript**. Các bản nâng cấp lớn như ECMAScript 6 (ES6) vào năm 2015 đã mang lại nhiều cải tiến và tính năng mới, giúp JavaScript trở thành một ngôn ngữ lập trình mạnh mẽ và hiệu quả hơn.

<h3>Đặc điểm của JavaScript</h3>
1. **Ngôn ngữ lập trình đa năng**: JavaScript là một ngôn ngữ lập trình đa năng, có thể được sử dụng cả ở phía máy khách (client-side) lẫn phía máy chủ (server-side). Điều này có nghĩa là bạn có thể sử dụng JavaScript để tạo ra các tính năng tương tác cho trang web (phía client) cũng như để xử lý dữ liệu, điều hành logic phía server (phía server).
2. **Thông dịch (interpreted)**: JavaScript là một ngôn ngữ thông dịch, tức là mã JavaScript được thực thi trực tiếp bởi trình duyệt mà không cần phải biên dịch trước. Điều này giúp quá trình phát triển và thử nghiệm trở nên nhanh chóng và linh hoạt.
3. **Đa nền tảng (cross-platform)**: JavaScript có thể chạy trên hầu hết mọi nền tảng mà không cần thay đổi mã, miễn là nền tảng đó có trình duyệt hỗ trợ JavaScript. Điều này bao gồm cả máy tính để bàn, máy tính xách tay, điện thoại di động, và các thiết bị khác.
4. **Động (dynamic)**: JavaScript là một ngôn ngữ lập trình động, cho phép thay đổi kiểu dữ liệu của biến trong quá trình thực thi chương trình.
    :::danger
    **Tuy ngôn ngữ lập trình động này mang lại sự linh hoạt, nhưng cũng có thể gây ra lỗi nếu không được kiểm soát cẩn thận.**
    :::
5. **Hướng đối tượng (object-oriented)**: JavaScript hỗ trợ lập trình hướng đối tượng thông qua các đối tượng (objects) và nguyên mẫu (prototypes). Điều này giúp cấu trúc mã nguồn và quản lý dễ dàng hơn.
    :::info
    Lưu ý: JavaScript **không phải là ngôn ngữ hướng đối tượng hoàn toàn**, JavaScript chỉ hỗ trợ hướng đối tượng nhưng bản chất của JavaScript là **lập trình hàm (Functional Programming - FP)**.
    :::

## Vì sao nên học JavaScript ?

Ngắn gọn và xúc tích, vì **bố mày đẹp trai hơn Java**.

1. **Phổ biến**: JavaScript là một trong những ngôn ngữ lập trình phổ biến nhất trên thế giới, được sử dụng bởi **hàng triệu nhà phát triển** và **hàng tỷ thiết bị**.
2. **Đa năng**: Có thể sử dụng JavaScript trên cả **phía máy khách (client-side)** và p**hía máy chủ (server-side)**, làm cho nó trở thành một ngôn ngữ toàn diện cho việc **phát triển web toàn diện (full-stack development)**.
3. **Cộng đồng lớn**: Với một **cộng đồng lập trình viên rộng lớn**, bạn sẽ dễ dàng tìm thấy tài liệu học tập, hướng dẫn, và hỗ trợ từ các diễn đàn và nhóm lập trình.
4. **Khả năng việc làm**: Nhu cầu tuyển dụng các lập trình viên JavaScript **rất cao**, mở ra nhiều cơ hội việc làm hấp dẫn trong ngành công nghệ.

## Ưu và Nhược của JavaScript ?

<h3>Ưu điểm</h3>

1. **Dễ học và sử dụng**: JavaScript có cú pháp tương đối dễ hiểu và dễ học, đặc biệt đối với những người mới bắt đầu.
2. **Chạy trên mọi nền tảng**: JavaScript có thể chạy trên bất kỳ trình duyệt web nào mà không cần cấu hình thêm.
   :::info
   Có thể chạy cùng với HTML không, hoặc kết hợp với các Package Manager khác như: `npm`, `pnpm`, `yarn` và mới nhất là `bun`.
   :::
3. **Tính tương tác cao**: Cho phép tạo ra các trang web và ứng dụng web tương tác, nâng cao trải nghiệm người dùng.
4. **Thư viện và Framework phong phú**: Có rất nhiều thư viện và framework như React, Angular, và Vue.js cho Front-end và Express, MongoDB và NestJS cho back end, giúp hỗ trợ phát triển ứng dụng nhanh chóng và hiệu quả.
   :::info
   - **Với lập trình phía Ứng Dụng**: `React Native`, `Angular.io`, `NativeScript`, `PhoneGap`, `ElectronJS`, ...
   - **Với lập trình phía Web**: `React`, `Next`, `Vue`, `Angular`, `Svelte`, `ThreeJS`, ...
   - **Với lập trình phía Server**: `ExpressJS`, `tRPC`, `NestJS`, `Socket.io`, `FeathersJS`, ...
     :::

<h3>Nhược điểm</h3>

1. **Bảo mật**: Do JavaScript chạy trên trình duyệt của người dùng, mã JavaScript có thể bị xem và sửa đổi dễ dàng, gây ra các vấn đề bảo mật.
   :::tip
   Lấy ví dụ như khi làm việc với `React`, hãy **build project** trước khi deploy lên website.
   :::
2. **Khả năng hỗ trợ không đồng nhất:** Một số tính năng mới của JavaScript có thể không được hỗ trợ trên tất cả các trình duyệt, gây ra các vấn đề tương thích.
   :::tip
   Anh em có thể check khả năng tương thích của các `built-in functions` của JavaScript thông qua website: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs).
   :::
3. **Hiệu suất**: So với một số ngôn ngữ lập trình khác, JavaScript có thể không hiệu quả trong một số tình huống yêu cầu xử lý nặng nề.
4. **Động (dynamic)**: Như đã đề cập ở trên, tuy ngôn ngữ lập trình động này mang lại **sự linh hoạt**, nhưng nó cũng là **một con dao hai lưỡi** gây ra lỗi nếu không được kiểm soát cẩn thận.
   :::danger[Phân tích]
      <h3>Xét đoạn code sau đây: </h3>

   ```js title="src/add.js"
   export default function add(param1, param2) {
     return param1 + param2;
   }
   ```

   **Trường hợp 1**: Khi `param1` và `param2` cùng kiểu dữ liệu `number`:

   ```js title="src/index.js"
   import add from "add";
   const param1 = 5;
   const param2 = 10;
   console.log(add(param1, param2)); //15
   ```

   **Trường hợp 2**: Khi `param1` và `param2` khác kiểu dữ liệu, cụ thể là `string` và `number`:

   ```js title="src/index.js"
   import add from "add";
   const param1 = 5;
   const param2 = "abc";
   console.log(add(param1, param2)); //5abc
   ```

   #### Thông qua ví dụ trên, anh em có thể thấy rằng việc không nêu rõ kiểu dữ liệu mình muốn dùng sẽ có thể đưa ra kết quả không mong muốn.

   :::tip
   Để tránh việc kiểu dữ liệu đầu vào không mong muốn, chúng ta có thể sử dụng `TypeScript` thay vì `JavaScript`, hoặc **định nghĩa kiểu dữ liệu** bằng cách dùng `jsdoc` như sau:

   ```js title="src/add.js"
   /**
    * Cộng hai số lại với nhau
    * @param {number} param1 - Số đầu tiên
    * @param {number} param2 - Số thứ hai
    * @returns {number} tổng hai số
    **/
   export default function add(param1, param2) {
     return param1 + param2;
   }
   ```

   :::danger[Lưu Ý]
   Việc sử dụng `jsdoc` chỉ giúp chúng ta **định nghĩa kiểu dữ liệu trong JavaScript**, nhưng sẽ không giúp chúng ta **phòng tránh** việc sử dụng sai kiểu dữ liệu. Vậy nên, **Be Responsive** :D
   :::
   :::
   :::

## Áp dụng thực tiễn của JavaScript

JavaScript có rất nhiều ứng dụng thực tiễn, bao gồm:

1. **Phát triển web**: Tạo ra các trang web động và tương tác, từ các trang web đơn giản đến các ứng dụng web phức tạp như mạng xã hội, hệ thống quản lý nội dung, và thương mại điện tử.
2. **Ứng dụng di động**: Sử dụng các framework như React Native để phát triển ứng dụng di động cho cả iOS và Android.
3. **Phát triển máy tính để bàn:** Với các công cụ như Electron, bạn có thể phát triển các ứng dụng máy tính để bàn sử dụng JavaScript.
4. **Phát triển trò chơi**: JavaScript có thể được sử dụng để phát triển trò chơi 2D và 3D thông qua các thư viện và framework như Phaser và Three.js.
