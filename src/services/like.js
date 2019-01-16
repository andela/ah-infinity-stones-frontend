/* eslint quote-props: ["error", "always"] */
/* eslint-disable no-undef */
import { baseURL } from '../common/constants';

/* handle api call */
async function like(likeData, artSlug) {
  const path = `/articles/${artSlug}/like-dislike`;
  const token = localStorage.getItem('Token');
  try {
    const response = await fetch(baseURL + path, {
      'method': 'POST',
      'headers': {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token,
      },
      'body': JSON.stringify({ 'like': likeData.like }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    return e;
  }
}
export default like;
