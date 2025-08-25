const calcBMI = (height, w) => {
    const h = height / 100;
    const bmi = w / (h ** 2);
    let Data = '';
    if (bmi < 18.5) {
        Data = '過輕';
    } else if (bmi < 24) {
        Data = '正常';
    } else if (bmi < 27) {
        Data = '過重';
    } else if (bmi < 30) {
        Data = '輕度肥胖';
    } else if (bmi < 35) {
        Data = '中度肥胖';
    } else if (bmi >= 35) {
        Data = '重度肥胖';
    } else {
        Data = '請重新輸入';
    }
    return {
        'BMI': bmi, Data

    };
}

const max = (num1, num2) => {
    let max = num1;
    if (num1 < num2) {
        max = num2;
    }
    return max;
}

const maxNum = (...nums) => {
    let max1 = nums[0];
    for (let number of nums) {
        if (number > max1) {
            max1 = number;
        }
    }
    return max1;
}