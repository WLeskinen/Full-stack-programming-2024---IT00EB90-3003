import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";


// This function delets a contact.
// It calls for the deleteContact function for the selected ContactID.
// Afterwards, it redirects the user to the root.
export async function action({ params }) {
    await deleteContact(params.contactId);
    return redirect("/");
}