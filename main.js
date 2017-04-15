$(document).ready(function () {

	var jq = {
		basicQuest: $('#input_text_quest'),
		basicAns: $('#input_text_ans'),
		submit: $('#submit_basic')
	};

	jq.submit.on('click',function (e) {
		e.preventDefault();

		var question = jq.basicQuest.val().trim();
		var answer = jq.basicAns.val().trim();

		if(question !== '' && answer !== '') {
			console.log(question, answer);
			jq.basicAns.val('');
			jq.basicQuest.val('');
		}



	});

});
