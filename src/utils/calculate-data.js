/* eslint-disable no-console */
import { msToTime } from 'utils/ms-to-time';
import { CLICK_NAMES } from 'constants/click-names';
import { START_TIME_STORAGE_KEY } from 'constants/local-storage-keys';

export const calculateData = async (user, data = [], logInConsole = true) => {
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
      headerItem: filterByName(CLICK_NAMES.HIDDEN_HEADER_ITEM),
      sizeHover: filterByName(CLICK_NAMES.HIDDEN_SIZE_ITEM__HOVER),
      typeHover: filterByName(CLICK_NAMES.HIDDEN_TYPE_ITEM__HOVER)
    },
    time: msToTime(new Date().getTime() - localStorage.getItem(START_TIME_STORAGE_KEY))
  };

  if (logInConsole) {
    console.log('Your Data: ', result);
  }

  return result;
};
