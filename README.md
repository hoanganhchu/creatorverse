# WEB103 Prework - *Creatorverse*

Submitted by: **Hoang Anh Chu**

This web app: **A CRUD application that allows users to share, view, edit, and delete their favorite content creators. Users can manage creators with their social media handles for YouTube, Twitter, and Instagram. Built with React, Vite, and Supabase.**

Time spent: **6** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **A logical component structure in React is used to create the frontend of the app**
- [x] **At least five content creators are displayed on the homepage of the app**
- [x] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [x] **API calls use the async/await design pattern via Axios or Fetch**
- [x] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [x] **Each content creator has their own unique URL**
- [x] **The user can edit a content creator to change their name, url, or description**
- [x] **The user can delete a content creator**
- [x] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the page**


The following **optional** features are implemented:

- [x] Modern CSS is used to style HTML elements
- [x] The content creator items are displayed in a creative format, like cards instead of a list
- [x] An image of each content creator is shown on their content creator card

The following **additional** features are implemented:

- [x] Social media icons (YouTube, Twitter, Instagram) link directly to each platform
- [x] Custom delete confirmation modal instead of browser alert
- [x] Hero section with space background image
- [x] Responsive grid layout for creator cards
- [x] Glassmorphism design with hover effects

## Video Walkthrough

[Click here to watch the pre-work walkthrough video on Loom](https://www.loom.com/share/e57ce26a2fb440bc83be3e6318d73d4d)

## Notes

Describe any challenges encountered while building the app:
- Configuring Supabase database schema with proper columns for social media handles
- Managing form state efficiently across both Add and Edit pages using a shared CreatorForm component
- Implementing a custom modal for delete confirmation with smooth UX
- Designing card layouts with background images and overlay effects
- Setting up React Router for unique URLs per creator

## License

Copyright 2026 Hoang Anh Chu

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
