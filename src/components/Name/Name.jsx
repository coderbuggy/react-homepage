import './Name.scss';

const Name = () =>{
    

    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
      }
      
      function formatDate(date) {
        return [
          padTo2Digits(date.getDate()),
          padTo2Digits(date.getMonth() + 1),
          date.getFullYear(),
        ].join(' / ');
      }

      var days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];


      
    let today = formatDate(new Date()).toString()
    let todaysName = days[new Date().getDay()];
    var time = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();


    return (
        <div className='nameSection'>
            <h1 className='name'>{today} , {todaysName}</h1>
            <h3 className='name'>Hoşgeldin, Buğra.</h3>
        </div>
    )
}

export default Name