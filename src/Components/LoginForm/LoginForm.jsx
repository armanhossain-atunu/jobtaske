// "use client";

// import { useRouter } from "next/navigation";
// import React, { useState } from "react";
// import { toast } from "react-toastify";

// const LoginForm = () => {
//     const router = useRouter();
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     // Hardcoded Credentials
//     const validEmail = "admin@codefiy.com";
//     const validPassword = "123456";

//     const handleLogin = (e) => {
//         e.preventDefault();
//         if (email === validEmail && password === validPassword) {
//             document.cookie = 'auth=true; path=/'; 
//             router.push("/services");
//             toast.success("Login successful!");
//         } else {
//             toast.error("Invalid email or password!");
//         }
//     };

//     return (
//         <div className="min-h-screen flex justify-center items-center bg-gray-100">
//             <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
//                 <h2 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>
//                 <form onSubmit={handleLogin} className="space-y-4">
//                     <div>
//                         <label className="block mb-1 font-medium">Email</label>
//                         <input
//                             type="email"
//                             className="w-full border px-3 py-2 rounded-md"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             placeholder="admin@example.com"
//                             required
//                         />
//                     </div>

//                     <div>
//                         <label className="block mb-1 font-medium">Password</label>
//                         <input
//                             type="password"
//                             className="w-full border px-3 py-2 rounded-md"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             placeholder="123456"
//                             required
//                         />
//                     </div>

//                     <button
//                         type="submit"
//                         className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
//                     >
//                         Login
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default LoginForm;
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      
    });
    if (res.ok) {
        router.push("/services");
        toast.success("Login successful!");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center">Login</h2>

        {error && <p className="text-red-500">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
          required
        />

        <button className="bg-primary text-white py-2 rounded hover:bg-primary/80">
          Login
        </button>
      </form>
    </div>
  );
}
