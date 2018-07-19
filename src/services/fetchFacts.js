import request from "superagent";

export default async () => {
  try {
    const payload = await request
    .get(`${process.env.REACT_APP_FACTS_BE_URL}/facts`);
    return payload.body;
  } catch (e) {
    console.log(`Error fetching facts: ${e}`);
  }
};