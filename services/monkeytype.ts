import axios from "axios";
import https from "https";
import { MONKEYTYPE_ACCOUNT } from "@/common/constants/monkeytype";

const { username, api_key } = MONKEYTYPE_ACCOUNT;
const httpsAgent = new https.Agent({ rejectUnauthorized: false });

const USER_ENDPOINT = `https://api.monkeytype.com/users/${username}/profile?isUid=false`;

export const getMonkeytypeData = async () => {
  const response = await axios.get(USER_ENDPOINT, {
    headers: {
      Authorization: `ApeKey ${api_key}`,
    },
    httpsAgent,
    timeout: 10000,
  });
  const status = response.status;
  const responseJson = response.data;
  if (status > 400) {
    return { status, data: {} };
  }

  return { status, data: responseJson.data };
};
