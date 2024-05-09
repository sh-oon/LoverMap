/**
 *
 * @description check if the value is null or undefined in object
 * @param {Array} keys
 * @param {Object} obj
 * @returns {boolean} errors
 * @example
 * const errors = validator.validateRequiredKeys(['name', 'age'], { name: 'mike' })
 */
export const valiateRequiredKeys = (keys, obj) => {
  const res = {};

  for (const key of keys) {
    const value = obj[key];
    if (
      value === null ||
      value === undefined ||
      (Array.isArray(value) && value.length === 0)
    ) {
      res[key] = `${key} is required.`;
    }
  }

  if (Object.keys(res).length > 0) {
    return {
      result: false,
      errors: res,
    };
  }

  return {
    result: true,
  };
};

export function formatDate(date, format, defaultValue = '-') {
  if (!date) return defaultValue;
  date = new Date(date);
  const pad = (num) => (num < 10 ? '0' + num : num);

  // 연도는 두글자만 사용
  const yearFull = date.getFullYear();
  const year = yearFull.toString().substr(-2); // 연도의 마지막 두 자리
  const month = pad(date.getMonth() + 1); // 월은 0부터 시작하므로 +1이 필요합니다.
  const day = pad(date.getDate());
  const hour = pad(date.getHours());
  const minute = pad(date.getMinutes());
  const second = pad(date.getSeconds());

  if (format === 'YYYY-MM-DD') return `${yearFull}-${month}-${day}`;
  if (format === 'YYYY-MM-DD hh:mm:ss')
    return `${yearFull}-${month}-${day} ${hour}:${minute}:${second}`;
  if (format === 'YY-MM-DD') return `${year}-${month}-${day}`;
  if (format === 'YY-MM-DD hh:mm:ss')
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  if (format === 'MM-DD') return `${month}-${day}`;
  if (format === 'MM-DD hh:mm:ss')
    return `${month}-${day} ${hour}:${minute}:${second}`;
  else {
    return format
      .replace(/YYYY/g, yearFull)
      .replace(/EE/g, year)
      .replace(/MM/g, month)
      .replace(/DD/g, day)
      .replace(/hh/g, hour)
      .replace(/mm/g, minute)
      .replace(/ss/g, second);
  }
}

export function getDay(date, format = 'DDD') {
  // 요일을 반환 하는 함수
  const day = new Date(date).getDay();
  const dayList = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ];

  // format length만큼 잘라서 반환
  if (format === 'D') return dayList[day].slice(0, 1);
  else if (format === 'DD') return dayList[day].slice(0, 2);
  else if (format === 'DDD') return dayList[day].slice(0, 3);
  else return dayList[day];
}

/**
 * @description 핸드폰 번호를 포맷팅 합니다.
 * @returns {string}
 * @param value 포맷팅할 값
 * @param errorValue 포맷팅 실패시 반환할 값
 */
export const formatPhoneNumber = (value, errorValue = '') => {
  if (!value) return errorValue;

  const isValidLength = value.length === 11 || value.length === 10;

  if (isValidLength) {
    const regexPattern =
      value.length === 11
        ? /^(\d{3})(\d{4})(\d{4})$/
        : /^(\d{3})(\d{3})(\d{4})$/;
    return value.replace(regexPattern, '$1-$2-$3');
  } else {
    return value;
  }
};

export const fillZero = (string, digit) => {
  // digit자리수까지 0을 채웁니다
  if (!string) return '';
  return string.padStart(digit, '0');
};

/**
 * @description 문자열을 마스킹 합니다.
 * @param str
 */
export const maskString = (str) => {
  if (!str) return '-';

  const halfLength = Math.floor(str.length / 2);
  const maskedChars = '*'.repeat(halfLength);
  const visibleChars = str.slice(halfLength);
  return maskedChars + visibleChars;
};

export const blobFileDownload = (buffer, fileName) => {
  const blob = new Blob([buffer]);
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.style.display = 'none';
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};

export function convertToISOString(dateTimeString) {
  // 입력된 문자열을 공백으로 분리하여 날짜와 시간을 추출합니다.
  const [datePart, timePart] = dateTimeString.split(' ');

  // 날짜와 시간을 다시 하이픈(-)과 콜론(:)을 기준으로 분리합니다.
  const [year, month, day] = datePart.split('-');
  const [hour, minute] = timePart.split(':');

  // Date 객체를 생성합니다.
  const date = new Date(year, month - 1, day, hour, minute);

  // ISO 문자열로 변환합니다.
  return date.toISOString();
}

/**
 * @description 해시태그를 포맷팅 합니다.
 * @param hashtags
 * @returns {*|*[]}
 */
export function formatHashtags(hashtags) {
  if (!Array.isArray(hashtags)) {
    return [];
  } else {
    return hashtags.map((tag) => '#' + tag);
  }
}

/**
 * @description 금액을 한글표기로 변경.
 *
 * @returns {string}
 * @param price
 */
export function formatMoney(price) {
  if (typeof price !== 'number') return '-원          ';
  const koreanUnits = ['', '만', '억', '조'];
  let answer = '';
  let unit = 10000;
  let index = 0;
  let division = Math.pow(unit, index);

  while (Math.floor(price / division) > 0) {
    const mod = Math.floor((price % (division * unit)) / division);
    if (mod) {
      const modToString = mod.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      if (answer) answer = `${modToString}${koreanUnits[index]} ` + answer;
      else answer = `${modToString}${koreanUnits[index]}` + answer;
    }
    division = Math.pow(unit, ++index);
  }
  if (answer.length === 0) answer = '0';
  return `${answer}원`;
}

export function formatLocalizeMoney(price) {
  // 천워단위로 콤마를 찍습니다.
  if (!price) return '-원';
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function generateDeepCopiedObject(obj) {
  if (window.structuredClone) {
    return window.structuredClone(obj);
  }
  // 객체를 깊은 복사 합니다.
  return JSON.parse(JSON.stringify(obj));
}

export function formatCompanyCode(companyCode, type = 'dash') {
  // 회사코드를 포맷팅 합니다.
  if (!companyCode) return '';
  try {
    let formatted;
    if (type === 'dash') {
      formatted = companyCode.replace(/^(\d{3})(\d{2})(\d{5})$/, '$1-$2-$3');
    } else {
      formatted = companyCode.replace(/^(\d{3})(\d{2})(\d{5})$/, '$1 $2 $3');
    }
    return formatted;
  } catch (e) {
    return '';
  }
}

/**
 *
 * @description 부가세를 계산합니다.
 * @param price 부가세를 계산할 금액
 * @param type 알고있는 금액의 타입
 * @param surtaxRate 부가세율
 * @returns {{supply: *, surtax: number, total: *}}
 */
export function calcSurtax(price, type, surtaxRate = 0.1) {
  // 전체금액, 부가세, 공급가를 계산합니다.
  let surtax = 0;
  let supply = 0;
  let total = 0;

  if (type === 'supply') {
    supply = price;
    surtax = Math.round(price * surtaxRate);
    total = price + surtax;
  } else if (type === 'total') {
    total = price;
    surtax = Math.round(price / (1 + surtaxRate));
    supply = price - surtax;
  } else {
    throw new Error('type은 supply 또는 total이어야 합니다.');
  }

  return {
    surtax,
    supply,
    total,
  };
}

/**
 * @description 이미지 파일에서 url 을 추출합니다.
 * @param file
 * @returns {string}
 */

export function getImageUrl(file) {
  console.log(file);
  if (!file) return '';
  return URL.createObjectURL(file);
}
