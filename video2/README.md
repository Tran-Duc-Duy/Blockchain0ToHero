# Day la tieu de to

## Day la tieu de vua

1. đây là 1
2. đây là 2

-   [day la link](https.gitlab.com)
-   [dao minh hien](https.hiendm.com)

<img src = "#" alt = "If image not found"> </img>

# xây dựng mini app với HTML, CSS, JAVASCRIPT

## HTML :

-   Cấu trúc html
-   Thẻ (tag) trong html
-   Atribute của tag, các attr quan trọng như id, class, name

### Thẻ (tag)

-   thẻ mở <TEN_THE>
-   thẻ đóng </{TEN_THE}>
-   file css mô tả thuộc tính của thẻ (làm đẹp thẻ)
-   thẻ script : (xử lý các hành động tương tác với thẻ vd : bấm và sẽ chuyển xang trang khác)
-   cấu trúc của 1 thẻ body: header, main, footer

### CSS:

-   selecter
    -   là một bộ chọn (vd: .header)
    -   header > button: từ thẻ header VÀO 1 CẤP, chọn tất cả các button
    -   header > button : từ thẻ header chọn tất cả các button
    -   .left_side button: target đến toàn bộ button trong thẻ có class là left side
    -   .right_side > button:nth-child(2): thừ thẻ có class right_side đi vào cấp đầu tiên, chọn button thứ 2
    -   #btn_toi_co_id: id của tag phải là unique (duy nhất), target của thẻ tag có atribute id là #btn_toi_co_id
    -   p.center: target đến tất cả thẻ p có class center
-   Vị trí có thể đặt CSS
    -   đặt trong thẻ tag
    ```html
    <button style="height: 100px;">thang muon tim</button>
    ```
    -   đặt trong thẻ head
    ```html
    <head>
        <title>TinyCard</title>
        <style type="text/css">
            /* định nghĩa style cho tất cả tag button */
            button {
                /* màu của back ground */
                background: green;
            }
        </style>
    </head>
    ```
    -   tách thành file riêng
    ```html
    <link rel="stylesheet" href="./styles.css" />
    ```
-   Thứ tự ưu tiên
    tag > head > file css
    một cái style đã định nghĩa bên trên mà bên dưới dùng lại ưu tiên bên dưới

### JAVASCRIPT

-   Vị trí
    -   Nằm bên dưới thẻ tag thì mới tìm được thẻ tag
    -   Nằm trong file .js và được khai báo trong head bằng thẻ cript
    ```html
    <script defer type="text/javascript" src="./javascripts.js"></script>
    ```
-   Submit form
-   xử lý validate form data
