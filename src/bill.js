document.querySelector('.invoice-btn').onclick = function(){
    print();
}

document.querySelector(".main-window .bar .funct .add-booking").addEventListener("click", () =>{

    document.querySelector(".invoice-wrapper").classList.add("active");
    document.querySelector(".main-window").classList.add("active");
    document.querySelector(".sidebar").classList.add("active");
});

document.querySelector(".invoice-wrapper .close-btn").addEventListener("click", () =>{

    document.querySelector(".invoice-wrapper").classList.remove("active");
    document.querySelector(".main-window").classList.remove("active");
    document.querySelector(".sidebar").classList.remove("active");
});

Window.onload = function() {
    document.getElementById("download")
    .addEventListener("click", () => {
        const invoice = this.document.getElementById("print-area");
        html2pdf().from(invoice).save();
    })
}

fetch(`./json/data.json`) 
    .then(function(response) {
        return response.json();
    })
    .then (function(data) {
        let placeholder = document.querySelector("#table-body");
        let out = "";
        for (let product of data) {
            out += `
            <tr>
                <td>${product.med_Id}</td>
                <td>${product.med_name}</td>
                <td>${product.price}</td>
                <td></td>
                <td></td>
            </tr>
        `;
        }

        placeholder.innerHTML = out;
    });