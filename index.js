window.addEventListener('load', (event) => {

    let formData = new FormData(document.forms.person);

    // добавим ещё одно поле
    formData.append("middle", "Иванович");

    // отправим данные
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/article/xmlhttprequest/post/user");
    xhr.send(formData);

    xhr.onload = () => alert(xhr.response);
    console.log(submitButton)
});