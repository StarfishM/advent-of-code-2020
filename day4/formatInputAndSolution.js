const unformattedData = require("./unformattedInput");
const fs = require("fs");

const test = `ecl:grn
cid:315 iyr:2012 hgt:192cm eyr:2023 pid:873355140 byr:1925 hcl:#cb2c03

byr:2027 hcl:ec0cfd ecl:blu cid:120
eyr:1937 pid:106018766 iyr:2010 hgt:154cm

byr:1965 eyr:2028 hgt:157cm
cid:236 iyr:2018 ecl:brn
hcl:#cfa07d pid:584111467

eyr:2029 ecl:hzl
iyr:1972 byr:1966
pid:2898897192
hgt:59cm hcl:z

pid:231652013 hcl:#602927 hgt:166
ecl:grn eyr:2025
byr:2008 iyr:1986

byr:1928 hgt:167cm
hcl:#18171d iyr:2012
ecl:oth pid:237657808 eyr:1944
`;

const matchPatternWhiteSpace = /\n{2,}/g;
const arrOfAllPassports = [];

const formatByPassPObj = unformattedData.split(matchPatternWhiteSpace);
const createPassObj = formatByPassPObj.map((each) =>
    each.split(/\n/g).join().replace(/,/g, " ")
);

const splitStrFormatObj = (str) => {
    const splitUpStr = str.split(" ");
    let passportObj = {};
    splitUpStr.map((each) => {
        let passData = each.split(":");
        passportObj[passData[0]] = passData[1];
    });
    arrOfAllPassports.push(passportObj);
};

const arrOfPass = createPassObj.map((each) => {
    splitStrFormatObj(each);
});

// write json file
fs.writeFileSync(
    `${__dirname}/input.json`,
    JSON.stringify(arrOfAllPassports, null, 4)
);
