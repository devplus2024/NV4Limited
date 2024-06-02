const express = require('express');
const app = express();
const port = 3000;

// Đặt thư mục public là thư mục tĩnh để phục vụ các tệp tĩnh
app.use(express.static('public'));

// Xử lý yêu cầu POST từ trang HTML
app.post('/get_input_value', (req, res) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        const data = JSON.parse(body);
        const inputValue = data.input_value;
        console.log("Giá trị từ ô input:", inputValue);
        res.json({ message: 'success' });
    });
});

// Khởi động máy chủ
app.listen(port, () => {
    console.log(`Máy chủ đang chạy tại http://localhost:${port}`);
});
