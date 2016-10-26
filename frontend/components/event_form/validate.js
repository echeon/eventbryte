export const validateField = (prop, value) => {
  if (prop === "title") {
    if (value === "") {
      document.getElementById('event-form-title').style.borderColor = '#f00';
      document.querySelector('#event-form-title + span').innerHTML = "Title is required";
      return false;
    } else {
      document.getElementById('event-form-title').style.borderColor = 'rgb(210, 214, 223)';
      document.querySelector('#event-form-title + span').innerHTML = "";
    }
  } else if (prop === "start_date") {
    if (value === "") {
      document.getElementById('event-form-start-date').style.borderColor = '#f00';
      document.querySelector('#event-form-start-date + span').innerHTML = "Start date is required";
      return false;
    } else {
      document.getElementById('event-form-start-date').style.borderColor = 'rgb(210, 214, 223)';
      document.querySelector('#event-form-start-date + span').innerHTML = "";
    }
  } else if (prop === "start_time") {
    if (value === "") {
      document.getElementById('event-form-start-time').style.borderColor = '#f00';
      document.querySelector('#event-form-start-time + span').innerHTML = "Start time is required";
      return false;
    } else {
      document.getElementById('event-form-start-time').style.borderColor = 'rgb(210, 214, 223)';
      document.querySelector('#event-form-start-time + span').innerHTML = "";
    }
  } else if (prop === "end_date") {
    if (value === "") {
      document.getElementById('event-form-end-date').style.borderColor = '#f00';
      document.querySelector('#event-form-end-date + span').innerHTML = "End date is required";
      return false;
    } else {
      document.getElementById('event-form-end-date').style.borderColor = 'rgb(210, 214, 223)';
      document.querySelector('#event-form-end-date + span').innerHTML = "";
    }
  } else if (prop === "end_time") {
    if (value === "") {
      document.getElementById('event-form-end-time').style.borderColor = '#f00';
      document.querySelector('#event-form-end-time + span').innerHTML = "End time is required";
      return false;
    } else {
      document.getElementById('event-form-end-time').style.borderColor = 'rgb(210, 214, 223)';
      document.querySelector('#event-form-end-time + span').innerHTML = "";
    }
  } else if (prop === "ticket_price") {
    if (value === "") {
      document.getElementById('event-form-ticket-price').style.borderColor = '#f00';
      document.querySelector('#event-form-ticket-price + span').innerHTML = "Ticket price is required (Enter 0 for free tickets)";
      return false;
    } else if (parseFloat(value) < 0) {
      document.getElementById('event-form-ticket-price').style.borderColor = '#f00';
      document.querySelector('#event-form-ticket-price + span').innerHTML = "Ticket price cannot be less than 0";
      return false;
    } else {
      document.getElementById('event-form-ticket-price').style.borderColor = 'rgb(210, 214, 223)';
      document.querySelector('#event-form-ticket-price + span').innerHTML = "";
    }
  } else if (prop === "num_tickets") {
    if (value === "") {
      document.getElementById('event-form-num-tickets').style.borderColor = '#f00';
      document.querySelector('#event-form-num-tickets + span').innerHTML = "Number of tickets is required";
      return false;
    } else if (!Number.isInteger(Number(value))) {
      document.getElementById('event-form-num-tickets').style.borderColor = '#f00';
      document.querySelector('#event-form-num-tickets + span').innerHTML = "Number of tickets must be an integer";
      return false;
    } else if (Number(value) <= 0) {
      document.getElementById('event-form-num-tickets').style.borderColor = '#f00';
      document.querySelector('#event-form-num-tickets + span').innerHTML = "Number of tickets must be greater than 0";
      return false;
    } else {
      document.getElementById('event-form-num-tickets').style.borderColor = 'rgb(210, 214, 223)';
      document.querySelector('#event-form-num-tickets + span').innerHTML = "";
    }
  } else if (prop === "type_id") {
    if (value === "0") {
      document.getElementById('event-form-type').style.borderColor = '#f00';
      document.querySelector('#event-form-type + span').innerHTML = "Type is required";
      return false;
    } else {
      document.getElementById('event-form-type').style.borderColor = 'rgb(210, 214, 223)';
      document.querySelector('#event-form-type + span').innerHTML = "";
    }
  } else if (prop === "category_id") {
    if (value === "0") {
      document.getElementById('event-form-category').style.borderColor = '#f00';
      document.querySelector('#event-form-category + span').innerHTML = "Category is required";
      return false;
    } else {
      document.getElementById('event-form-category').style.borderColor = 'rgb(210, 214, 223)';
      document.querySelector('#event-form-category + span').innerHTML = "";
    }
  } else if (prop === "subcategory_id") {
    if (value === "0") {
      document.getElementById('event-form-subcategory').style.borderColor = '#f00';
      document.querySelector('#event-form-subcategory + span').innerHTML = "Subcategory is required";
      return false;
    } else {
      document.getElementById('event-form-subcategory').style.borderColor = 'rgb(210, 214, 223)';
      document.querySelector('#event-form-subcategory + span').innerHTML = "";
      return true;
    }
  } else if (prop === "place_id") {
    if (value === "") {
      document.getElementById('address-input').style.borderColor = '#f00';
      document.getElementById('event-form-address-error').innerHTML = "Address is required";
      return false;
    } else {
      document.getElementById('address-input').style.borderColor = 'rgb(210, 214, 223)';
      document.getElementById('event-form-address-error').innerHTML = "";
    }
  }
  return true;
};


export const validateForm = (thisEvent) => {
  let isFormReadyForSubmission = true;
  Object.keys(thisEvent).forEach(attr => {
    if (!validateField(attr, thisEvent[attr])) {
      isFormReadyForSubmission = false;
    }
  });
  return isFormReadyForSubmission;
};
