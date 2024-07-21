import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="min-h-screen mt-52 ">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <h1 className="font-bold dark:text-white text-4xl">
            Welcome to{" "}
            <Link
              to={"/"}
              className="px-2 py-1 bg-gradient-to-tr from-lime-400 via-indigo-700 to-rose-300 rounded-lg text-white"
            >
              Cyrotik
            </Link>
          </h1>
          <p className="text-sm mt-5">
            Community of People. Community of Thinking. Community of
            Dreamer&apos;s. Community of Leader&apos;s
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your username" />
              <TextInput type="text" placeholder="Username" id="usename" />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput
                type="text"
                placeholder="example@email.com"
                id="email"
              />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput type="text" placeholder="********" id="password" />
            </div>
            <Button gradientDuoTone={"purpleToPink"} type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to={"/sign-in"} className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
