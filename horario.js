"use strict";

module.exports = (data, txt) => {
	const month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
	const day = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

	const objFN = {
		initialize: () => {
			const _day = data.getDay();
			const _month = data.getMonth();
			const _dayStatus = data.getDate();
			const _year = data.getFullYear();
			let _result;
			for(var i = 0; i < day.length; i++) {
				_result = txt + ': ' + day[_day] + ' ' + _dayStatus + ' ' +' de ' + month[_month] + ' ' + _year;
				return _result;
			}
		}
	}


	objFN.initialize();

}
