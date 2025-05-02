"use strict";

/**
 * Fetch data from server
 * @param {*} url API url [required]
 * @param {*} successCallback success callback [required]
 * @param {*} errorCallback error callback [required]
 */

export const fetchData = async (url, successCallback, errorCallback) => {
  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    successCallback(data);
  } else {
    const error = await response.json();
    errorCallback && errorCallback(error);
  }
};
