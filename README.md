# Express.js Route Handler Missing Error Handling for Invalid User IDs

This repository demonstrates a common error in Express.js route handlers: the lack of proper error handling for invalid input.  Specifically, the provided code attempts to parse a user ID from the request parameters as an integer without first validating that it is a valid integer.  This can lead to unexpected behavior or crashes.

## Bug Description

The bug is located in the `/users/:id` route handler.  It attempts to find a user using `parseInt(userId)`, which might fail if `userId` is not a valid integer (e.g., contains letters or special characters).  This can result in unexpected behavior or runtime errors.

## Solution

The solution involves adding error handling to gracefully handle non-numeric user IDs.  It uses `isNaN` to check the validity of the parsed ID before attempting to find the user.  If the ID is not a number, a 400 Bad Request response is returned.