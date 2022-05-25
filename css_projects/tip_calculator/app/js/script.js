window.onload = function(){
    const bill = document.querySelector('#bill');
    const tip = document.querySelector('.selected');
    const person = document.querySelector('#no-of-people');
    const btn = document.querySelectorAll('.wrapper-input .btn')
    const text_btn = document.querySelector('.btn-text');
   
    for (let button of btn) {
        button.addEventListener("click", function(){
            document.querySelector('.selected').classList.remove('selected');
            button.classList.add('selected');
        });
        button.addEventListener("click", populate_result);
    }
    text_btn.addEventListener("click", function(){
        text_btn.value="";
    });
    bill.addEventListener("keypress", populate_result);
    person.addEventListener("keypress", populate_result);

    function populate_result() {
        const bill = document.querySelector('#bill');
        const person = document.querySelector('#no-of-people');
        if ((bill.value !=0) & (person.value !=0)){
            bill_value = document.querySelector('#bill').value;
            tip_value = document.querySelector('.selected').value;
            no_of_person = document.querySelector('#no-of-people').value;
            tip_amount = bill_value*(tip_value.slice(0, -1))/100;
            tip_per_person = tip_amount/no_of_person;
            total_person = (Number(bill_value)+Number(tip_amount))/no_of_person;

            const tip_output = document.querySelector('.result-data:nth-child(1)>span');
            const total_output = document.querySelector('.result-data:nth-child(2)>span');
            tip_output.innerHTML = tip_per_person;
            total_output.innerHTML = total_person;
        }
    }
}