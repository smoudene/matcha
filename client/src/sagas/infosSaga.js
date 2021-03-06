import { takeLatest, put, call, delay } from "redux-saga/effects";
import { push } from "react-router-redux";
import { infosError, infosUserSuccess, infosErrorField } from "../actions/infosAction";
import {updateUserSuccess} from '../actions/userAction'
import { request } from './helper';

const infos =
  function *infos({ data }) {
    try {
      const username = data.username;
      const first_name = data.first_name;
      const last_name = data.last_name;
      const email = data.p_email;
      const password = data.pass;
      const response = yield call(request, {
        "url": "http://localhost:3001/infos",
        "data": {
          username,
          first_name,
          last_name,
          email,
          password
        },
        "method": "post"
      });

      if (response.data.isValid) {
        const  user = response.data.user;
        yield put(infosUserSuccess());
        yield put(updateUserSuccess(user));
        yield put(push("/profile"));
      }
      else {
        yield put(infosErrorField(response.data.errorField))
        yield delay(4000);
      }
    } catch (error) {
      if (error.response) {
        yield put(infosError("error.response.statusText", "error.response.status"));
      }
    }
  };

export default function *inf() {
  yield takeLatest("INFOS_USER", infos);
}