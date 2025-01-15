function createPromotion() {
    event.preventDefault();
    if (validateForm()){
        let title = document.getElementById('title').value;
        let startDate = document.getElementById('startDate').value
        let endDate = document.getElementById('endDate').value
        let discount = document.getElementById('discount').value
        let details = document.getElementById('details').value
        let promotion = {
            title: title,
            startDate: startDate,
            endDate: endDate,
            discount: discount,
            detail: details
        };
        $.ajax({
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json',
            },
            url: `http://localhost:8080/api/promotions`,
            type: 'POST',
            data: JSON.stringify(promotion),
            success: function (result) {
                console.log(result);
                alert("Khuyến mãi mới đã được thêm!")
            }
        })
    } else {
        return;
    }
}

function validateForm() {
    // Lấy các giá trị từ form
    let title = document.getElementById('title').value;
    let startDate = new Date(document.getElementById('startDate').value);
    let endDate = new Date(document.getElementById('endDate').value);
    let discount = document.getElementById('discount').value;
    let details = document.getElementById('details').value;

    if (!startDate || !endDate) {
        alert("Không được để trống");
        return false;
    }

    if (!title){
        $('#title').addClass('text-danger').attr('placeholder', "Tiêu đề không được để trống");
        return false;
    }

    if (!details){
        $('#discount').addClass('text-danger').attr('placeholder', "Mức giảm giá không được để trống");
        return false;
    }

    if (!discount){
        $('#details').addClass('text-danger').attr('placeholder', "Chi tiết không được để trống");
        return false;
    }

    if (discount <= 10000) {
        alert("Mức giảm giá phải lớn hơn 10,000.");
        return false;
    }

    let today = new Date();
    if (startDate <= today) {
        alert("Ngày bắt đầu phải lớn hơn ngày hiện tại.");
        return false;
    }


    if (endDate <= startDate) {
        alert("Ngày kết thúc phải lớn hơn ngày bắt đầu ít nhất 1 ngày.");
        return false;
    }

    return true;
}
