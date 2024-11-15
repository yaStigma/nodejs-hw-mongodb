import { model, Schema } from "mongoose";
import { typeList } from "../../constants/contacts.js";
import { handleSaveError, setUpdateSettings } from "./hooks.js";

const contactsShema = new Schema(
    {
        name: {
          type: String,
          required: true,
        },
        phoneNumber: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: false,

        },
        isFavourite: {
          type: Boolean,
          required: false,
          default: false,
        },
        contactType: {
          type: String,
          required: true,
          enum: typeList,
          default: "personal",
        },
      },
      {
        timestamps: true,
        versionKey: false,
      },
);
contactsShema.post("save", handleSaveError);
contactsShema.pre("findOneAndUpdate", setUpdateSettings);
contactsShema.post("findOneAndUpdate", handleSaveError);


export const ContactsCollection = model("contacts", contactsShema);