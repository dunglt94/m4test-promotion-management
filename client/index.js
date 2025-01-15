function getPromotions() {
    $.ajax({
        url: `http://localhost:8080/api/promotions`,
        type: 'GET',
        success: function (result) {
            console.log(result);
            let content = "";
            for (let i = 0; i < result.length; i++) {
                let startDate = moment(result[i].startDate).tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY");
                let endDate = moment(result[i].endDate).tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY");
                content += `
                 <tr>
                    <td>${result[i].title}</td>
                    <td class="text-center">${startDate}</td>
                    <td class="text-center">${endDate}</td>
                    <td class="text-end">${result[i].discount}</td>
                    <td>${result[i].detail}</td>
                    <td class="text-center"><button class="btn btn-primary btn-sm justify-content-center"><i class="bi bi-pencil"></button></td>
                    <td class="text-center"><button class="btn btn-danger btn-sm justify-content-center" 
                    onclick="deletePromotion('${result[i].title}',${result[i].id})"><i class="bi bi-trash"></button></td>
                </tr>
                `
            }
            $('#promotions').html(content);
        }
    })
}
getPromotions();

function deletePromotion(promotionTitle, promotionID) {
    let confirmDeletion = confirm(`Bạn có muốn xoá "${promotionTitle}" ?`);
    if (!confirmDeletion) {
        return;
    } else {
        $.ajax({
            url: `http://localhost:8080/api/promotions/${promotionID}`,
            type: 'DELETE',
            success: function (result) {
                console.log(result);
                getPromotions()
            }
        })
    }
}

