# Local Library

## Changes

Somehow, homebrew doesn't support latest version of [Node@16](https://formulae.brew.sh/formula/node@16) So, I downgraded from `16.9.1` 

- Node: `16.14.2` 

- Added some packages. 
   - jsonwebtoken (for auth token)
   - Body-parser (for token parsing)
   - multer (for uploading files)

- Changed Content Security Policy for third-party networks, with helmet.

## UI
- Refactored Home and catalog pages.  

## Auth
(JWT and cookie based)

- Login
- Signup
- Logout

## Search/Filter

- Full text-based search

## Refactoring

- MVC architecture
