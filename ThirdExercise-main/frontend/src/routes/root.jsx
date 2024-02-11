import {
  Outlet,
  NavLink,
  useLoaderData,
  Form,
  useNavigation,
  useSubmit,
  redirect,
} from "react-router-dom";
import { getContacts, createContact } from "../contacts";
import { useEffect } from "react";

// This function creates a new contact.
export async function action() {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}

// Loader function fetches contacts based on the search query from the request URL
export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q") || "";
  const contacts = await getContacts(q);
  return { contacts, q }
}

// Root component displays a sidebar with a search form, new contact button, and contact list.
export default function Root() {
  const { contacts, q } = useLoaderData();
  const navigation = useNavigation();
  const submit = useSubmit();

  // this constant determines if a search is in progress.
  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has(
      "q"
    );

  // Set the initial value of the search input when q changes.
  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]);

  

  // Render the sidebar with search form, new contact button, and contact list.
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
        <Form id="search-form" role="search">
            <input
              id="q"
              className={searching ? "loading" : ""}
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
              defaultValue={q}
              onChange={(event) => {
                const isFirstSearch = q == null;
                submit(event.currentTarget.form, {
                  replace: !isFirstSearch,
                });
              }}
              />
            <div
              id="search-spinner"
              aria-hidden
              hidden={!searching}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </Form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        
         {/* Contact list */}
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact._id}>
                  <NavLink
                    to={`contacts/${contact._id}`}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      {/* Detail section with Outlet for rendering nested routes */}
      <div id="detail"
        className={
          navigation.state === "loading" ? "loading" : ""
        }
        >
        <Outlet />
      </div>
    </>
  );
}