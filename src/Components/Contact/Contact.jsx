"use client";

import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // fake delay (replace with API/EmailJS later)
    setTimeout(() => {
      toast.success("Message sent successfully! 🎉");

      setForm({ name: "", email: "", message: "" });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-base-100 py-12">
      <div className="max-w-4xl mx-auto px-4">

        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Contact <span className="text-primary">Us</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-10 mt-12">

          {/* Left */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-700 mb-4">
              At <strong>CodeFiy Bangladesh</strong>, we love hearing from you!
            </p>

            <p><strong>Email:</strong> support@codefiy.com</p>
            <p><strong>Phone:</strong> +880 1700-000000</p>
            <p><strong>Location:</strong> Dhaka, Bangladesh</p>

            <Image 
              src="https://i.ibb.co.com/ccCpd67T/c44c1690013661-5e0a009911e87.gif"
              className="rounded-xl shadow mt-8"
              alt=""
              width={500}
              height={500}
            />
          </div>

          {/* Form */}
          <div className="card bg-base-200 shadow-xl p-6 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-4">

              <div>
                <label className="font-semibold">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="input input-bordered w-full mt-1"
                />
              </div>

              <div>
                <label className="font-semibold">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="input input-bordered w-full mt-1"
                />
              </div>

              <div>
                <label className="font-semibold">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="textarea textarea-bordered w-full mt-1"
                ></textarea>
              </div>

              <button className="btn btn-primary w-full" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
