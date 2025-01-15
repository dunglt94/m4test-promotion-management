function createPromotion() {
    event.preventDefault();
    let title = $('#title').val() || null;
    let startDate = document.getElementById('startDate').value;
    let endDate = document.getElementById('endDate').value;
    let discount = document.getElementById("discount").value || null;
    let details = $('#details').val() || null;
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
        },
        error: function (xhr) {
            console.log(xhr);
            if (xhr.status === 400) {
                let errors = xhr.responseJSON;
                $('.error-message').text('');
                Object.keys(errors).forEach(key => {
                    $(`#${key}Error`).text(errors[key]);
                });
            }
        }
    })
}