import express from "express"
import signupFn from "../controllers/signupFn.js"
import signinFn from "../controllers/signinFn.js"
import logoutFn from "../controllers/logoutFn.js"
const router = express.Router();

router.post("/signup",signupFn)

router.post("/signin",signinFn)

router.post("/login",logoutFn)

export default router








