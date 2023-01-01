/* eslint-disable no-console */
import { msToTime } from 'utils/ms-to-time';
import { CLICK_NAMES } from 'constants/click-names';
import { START_TIME_STORAGE_KEY } from 'constants/local-storage-keys';

const serverURL = '';

const saveDataRequest = (data) => {
  fetch(serverURL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then((response) => response.json())
    .then((res) => console.log(res));
};

export const calculateData = (user, data = [], saveData = false) => {
  const filterByName = (eventName) => data.filter((item) => item === eventName)?.length;

  const result = {
    user,
    back: filterByName(CLICK_NAMES.BACK),
    cta: filterByName(CLICK_NAMES.CTA_BTN),
    submit: filterByName(CLICK_NAMES.SUBMIT_BTN),
    theme: filterByName(CLICK_NAMES.TOGGLE_THEME),
    visible: {
      type: filterByName(CLICK_NAMES.VISIBLE_TYPE_ITEM),
      size: filterByName(CLICK_NAMES.VISIBLE_SIZE_ITEM),
      headerItem: filterByName(CLICK_NAMES.VISIBLE_HEADER_ITEM)
    },
    hidden: {
      type: filterByName(CLICK_NAMES.HIDDEN_TYPE_ITEM),
      size: filterByName(CLICK_NAMES.HIDDEN_SIZE_ITEM),
      accordion: filterByName(CLICK_NAMES.TOGGLE_ACCORDION),
      burgerItem: filterByName(CLICK_NAMES.HIDDEN_HEADER_ITEM),
      sizeHover: filterByName(CLICK_NAMES.HIDDEN_SIZE_ITEM__HOVER),
      typeHover: filterByName(CLICK_NAMES.HIDDEN_TYPE_ITEM__HOVER)
    },
    time: msToTime(new Date().getTime() - localStorage.getItem(START_TIME_STORAGE_KEY))
  };

  if (saveData) {
    console.log('Your Data: ', result);
    saveDataRequest(result);
  }

  return result;
};
