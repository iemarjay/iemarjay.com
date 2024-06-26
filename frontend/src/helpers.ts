import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(advancedFormat);

export function getStrapiImageFullUrl(image: { formats: Formats }, format: Format = 'thumbnail') {
  return process.env.NEXT_PUBLIC_BACKEND_BASE_URL?.replace(/\/+$/, '') + image?.formats?.[format]?.url;
}

export function formatDate(date: string) {
  return dayjs(date).format('Do MMMM, YYYY');
}
