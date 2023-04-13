import bcrypt from "bcryptjs";
export const generateTokens = () => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const key1 = bcrypt.hashSync("B4c0//", salt);
    const salt2 = bcrypt.genSaltSync(10);
    const key2 = bcrypt.hashSync("B4c0//", salt2);
    console.table({ key1, key2 });
    return {
      "access-token": key1,
      "refresh-token": key2,
    };
  } catch (error) {
    return {
      "access-token": "",
      "refresh-token": "",
    };
  }
};
