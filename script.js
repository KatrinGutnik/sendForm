"use strict"

document.addEventListener('DOMContentLoaded',function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);
    }

    function formValidate(form) {
        let 
    }

});














/*document.addEventListener('DOMContentLoaded',function () {
        const form = document.getElementById('form');  //<form action="" id="form" class="form__body">
        form.addEventListener('submit', formSend);

        async function formSend(e) {
            e.preventDefault();

            let error = formValidate(form);

            let formData = new FormData(form);
            formData.append('image', formImage.files[0]);

            if (error === 0) {
                form.classList.add('_sending');
                let response = await fetch('sendmail.php', {
                    method: 'POST',
                    body: formData
                });
                if (response.ok) {
                    let result = await response.json();
                    alert(result.message);
                    formPreview.innerHTML = '';
                    form.reset();
                } else {
                    alert("Ошибка");
                }
            } else {
                alert('Заполните обязательные поля!');
            }
        }

        function formValidate(form) {
            let error = 0;
            let formReq = document.querySelectorAll('._req');

            for (let index = 0; index < formReq.length; index++) {
                const input = formReq [index];
                formRemoveError(input);

                if (input.classList.contains('_email')) {
                    if (emailTest(input)) {
                        formAddError(input);
                        error++;
                    }
                } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                    formAddError(input);
                    error++;
                } else {
                    if (input.value === '') {
                        formAddError(input);
                        error++;
                    }
                }
            }
            return error;
        }


        function formAddError(input) {
            input.parentElement.classList.add('_error'); //данные ф-и доб самому обьекту класс еррор и родителю класс еррор
            input.classList.add('_error');
        }

        function formRemoveError(input) {
            input.parentElement.classList.remove('_error'); //ф-я убирает класс у род и об
            input.classList.remove('_error');
        }

        //ф-я для проверки емейл
        function emailTest(input) {
            return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
        }

//полуяаем инпут файл в пересенную
        const formImage = document.getElementById('formImage');
        //плучаем див для превью в переменную
        const formPreview = document.getElementById('formPreview');
        //слушаем изменения в импуте файл
        formImage.addEventListener('change', () => {
            uploadFile(formImage.files[0]);
        });

        //create this func
        function uploadFile(file) {
            //проверяем тип файла
            if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
                alert('Разрешены только изображения.');
                formImage.value = '';
                return;
            }
            //проверим размер файла
            if (file.size > 2 * 1024 * 1024) {
                alert('Файл должен быть не менее 2 МБ.');
                return;
            }

            let reader = new FileReader();
            reader.onload = function (e) {
                formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
            };
            reader.onerror = function (e) {
                alert('Ошибка');
            };
            reader.readAsDataURL(file);
        }


    });

