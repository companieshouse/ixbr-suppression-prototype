//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here
})

function select_click(resultValue) {
  if (resultValue == 'result_1') {
    var result_one = document.getElementById('result_1');
    var result_one_expanded = document.getElementById('result_1_expanded');

    result_one.classList.add('govuk-visually-hidden');
    result_one_expanded.classList.remove('govuk-visually-hidden');
  
  } else if (resultValue == 'result_2') {
      var result_two = document.getElementById('result_2');
      var result_two_expanded = document.getElementById('result_2_expanded');

      result_two.classList.add('govuk-visually-hidden');
      result_two_expanded.classList.remove('govuk-visually-hidden');

  } else if (resultValue == 'result_3') {
      var result_three = document.getElementById('result_3');
      var result_three_expanded = document.getElementById('result_3_expanded');

      result_three.classList.add('govuk-visually-hidden');
      result_three_expanded.classList.remove('govuk-visually-hidden');

  } else if (resultValue == 'result_4') {
      var result_four = document.getElementById('result_4');
      var result_four_expanded = document.getElementById('result_4_expanded');

      result_four.classList.add('govuk-visually-hidden');
      result_four_expanded.classList.remove('govuk-visually-hidden');
  }
}


function redact_click(resultValue) {
  if (resultValue == 'result_1') {
    var result_one_new_text = document.getElementById('result_1_textbox');

    result_one_new_text.value = 'Ben ##########';
  } else if (resultValue == 'result_3') {
    var result_one_new_text = document.getElementById('result_3_textbox');

    result_one_new_text.value = 'Mr B ##########';
  }
}


function change_click(resultValue) {
  if (resultValue == 'result_1') {
    var redact_link = document.getElementById('redact_link_1');
    var change_link = document.getElementById('change_link_1');
    var save_link = document.getElementById('save_link_1');

    redact_link.classList.add('govuk-visually-hidden');
    change_link.classList.add('govuk-visually-hidden');
    save_link.classList.remove('govuk-visually-hidden');
  
  } else if (resultValue == 'result_2') {
      var redact_link = document.getElementById('redact_link_2');
      var change_link = document.getElementById('change_link_2');
      var save_link = document.getElementById('save_link_2');

      redact_link.classList.add('govuk-visually-hidden');
      change_link.classList.add('govuk-visually-hidden');
      save_link.classList.remove('govuk-visually-hidden');

  } else if (resultValue == 'result_3') {
      var redact_link = document.getElementById('redact_link_3');
      var change_link = document.getElementById('change_link_3');
      var save_link = document.getElementById('save_link_3');

      redact_link.classList.add('govuk-visually-hidden');
      change_link.classList.add('govuk-visually-hidden');
      save_link.classList.remove('govuk-visually-hidden');

  } else if (resultValue == 'result_4') {
      var redact_link = document.getElementById('redact_link_4');
      var change_link = document.getElementById('change_link_4');
      var save_link = document.getElementById('save_link_4');

      redact_link.classList.add('govuk-visually-hidden');
      change_link.classList.add('govuk-visually-hidden');
      save_link.classList.remove('govuk-visually-hidden');
  }
}


function save_click(resultValue) {
  if (resultValue == 'result_1') {
    var result_one = document.getElementById('result_1');
    var result_one_expanded = document.getElementById('result_1_expanded');
    var result_one_new_text = document.getElementById('result_1_textbox');
    var result_one_text = document.getElementById('result_1_text');

    result_one.classList.remove('govuk-visually-hidden');
    result_one_expanded.classList.add('govuk-visually-hidden');

    result_one_text.innerHTML = result_one_new_text.value;
  
  } else if (resultValue == 'result_2') {
      var result_two = document.getElementById('result_2');
      var result_two_expanded = document.getElementById('result_2_expanded');
      var result_two_new_text = document.getElementById('result_2_textbox');
      var result_two_text = document.getElementById('result_2_text');

      result_two.classList.remove('govuk-visually-hidden');
      result_two_expanded.classList.add('govuk-visually-hidden');

      result_two_text.innerHTML = result_two_new_text.value;

  } else if (resultValue == 'result_3') {
      var result_three = document.getElementById('result_3');
      var result_three_expanded = document.getElementById('result_3_expanded');
      var result_three_new_text = document.getElementById('result_3_textbox');
      var result_three_text = document.getElementById('result_3_text');

      result_three.classList.remove('govuk-visually-hidden');
      result_three_expanded.classList.add('govuk-visually-hidden');

      result_three_text.innerHTML = result_three_new_text.value;

  } else if (resultValue == 'result_4') {
      var result_four = document.getElementById('result_4');
      var result_four_expanded = document.getElementById('result_4_expanded');
      var result_four_new_text = document.getElementById('result_4_textbox');
      var result_four_text = document.getElementById('result_4_text');

      result_four.classList.remove('govuk-visually-hidden');
      result_four_expanded.classList.add('govuk-visually-hidden');

      result_four_text.innerHTML = result_four_new_text.value;
  }
}


function close_click(resultValue) {
  if (resultValue == 'result_1') {
    var result_one = document.getElementById('result_1');
    var result_one_expanded = document.getElementById('result_1_expanded');

    result_one.classList.remove('govuk-visually-hidden');
    result_one_expanded.classList.add('govuk-visually-hidden');
  
  } else if (resultValue == 'result_2') {
      var result_two = document.getElementById('result_2');
      var result_two_expanded = document.getElementById('result_2_expanded');

      result_two.classList.remove('govuk-visually-hidden');
      result_two_expanded.classList.add('govuk-visually-hidden');

  } else if (resultValue == 'result_3') {
      var result_three = document.getElementById('result_3');
      var result_three_expanded = document.getElementById('result_3_expanded');

      result_three.classList.remove('govuk-visually-hidden');
      result_three_expanded.classList.add('govuk-visually-hidden');

  } else if (resultValue == 'result_4') {
      var result_four = document.getElementById('result_4');
      var result_four_expanded = document.getElementById('result_4_expanded');

      result_four.classList.remove('govuk-visually-hidden');
      result_four_expanded.classList.add('govuk-visually-hidden');
  }
}


function undo_click(changeValue) {
  if (changeValue == 'change_1') {
    var change_one = document.getElementById('change_1');

    change_one.classList.add('govuk-visually-hidden');
  
  } else if (changeValue == 'change_2') {
      var change_two = document.getElementById('change_2');

      change_two.classList.add('govuk-visually-hidden');
  }
}


