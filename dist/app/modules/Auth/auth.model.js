"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const mongoose_1 = require("mongoose");
const AuthSchema = new mongoose_1.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    role: {
        type: String,
        enum: { values: ["Auth", "admin"], message: "{VALUE} is not supported" },
        required: true,
        trim: true,
    },
    address: { type: String, required: true, trim: true },
}, {
    timestamps: true,
});
// middleware
// AuthSchema.pre("save", async function (next) {
//   const Auth = this;
//   Auth.password = await bcrypt.hash(
//     Auth.password,
//     Number(config.bcrypt_saltRounds)
//   );
//   next();
// });
AuthSchema.post("save", function (doc, next) {
    doc.password = " ";
    next();
});
exports.Auth = (0, mongoose_1.model)("Auth", AuthSchema);
