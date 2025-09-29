"use client";
import { Send } from "lucide-react";

export default function ApplyForm() {
  return (
    <section className="bg-transparent py-16 px-4 flex justify-center items-center mt-20">
      <form className="w-full max-w-5xl  backdrop-blur-md border border-blue-800/10 rounded-xl p-10 shadow-2xl space-y-8 text-white">
        <h2 className="text-3xl text-white font-bold text-center">
          Apply Now
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <input
            type="text"
            placeholder="Your First name.."
            className="px-3 py-2 form-input border border-gray-100 rounded-md text-white transition duration-700 ease-in-out focus:outline-none focus:ring-1 focus:ring-[#1c3869] focus:border-[#111735] focus:scale-95"
          />
          <input
            type="text"
            placeholder="Your Last name.."
            className="px-3 py-2 form-input border border-gray-100 rounded-md text-white transition duration-700 ease-in-out focus:outline-none focus:ring-1 focus:ring-[#1c3869] focus:border-[#111735] focus:scale-95"
          />
          <input
            type="email"
            placeholder="Your Email.."
            className="px-3 py-2 form-input border border-gray-100 rounded-md text-white transition duration-700 ease-in-out focus:outline-none focus:ring-1 focus:ring-[#1c3869] focus:border-[#111735] focus:scale-95"
          />

          <select className="px-3 py-2 form-input border border-gray-100 rounded-md text-white  transition duration-700 ease-in-out focus:ring-[#1c3869] focus:border-[#111735] ">
            <option className="text-black">Gender</option>
            <option className="text-black">Male</option>
            <option className="text-black">Female</option>
          </select>
          <input
            type="text"
            placeholder="Your Phone Number.."
            className="px-3 py-2 form-input border border-gray-100 rounded-md text-white transition duration-700 ease-in-out focus:outline-none focus:ring-1 focus:ring-[#1c3869] focus:border-[#111735] focus:scale-95"
          />
          <input
            type="text"
            placeholder="Your Mobile Number.."
            className="px-3 py-2 form-input border border-gray-100 rounded-md text-white transition duration-700 ease-in-out focus:outline-none focus:ring-1 focus:ring-[#1c3869] focus:border-[#111735] focus:scale-95"
          />

          <input
            type="text"
            placeholder="Your Current Address.."
            className="px-3 py-2 form-input border border-gray-100 rounded-md text-white transition duration-700 ease-in-out focus:outline-none focus:ring-1 focus:ring-[#1c3869] focus:border-[#111735] focus:scale-95"
          />
          <input
            type="text"
            placeholder="Your Permanent Address.."
            className="px-3 py-2 form-input border border-gray-100 rounded-md text-white transition duration-700 ease-in-out focus:outline-none focus:ring-1 focus:ring-[#1c3869] focus:border-[#111735] focus:scale-95"
          />
          <input
            type="text"
            placeholder="Your Country.."
            className="px-3 py-2 form-input border border-gray-100 rounded-md text-white transition duration-700 ease-in-out focus:outline-none focus:ring-1 focus:ring-[#1c3869] focus:border-[#111735] focus:scale-95"
          />

          <input
            type="text"
            placeholder="Your City.."
            className="px-3 py-2 form-input border border-gray-100 rounded-md text-white transition duration-700 ease-in-out focus:outline-none focus:ring-1 focus:ring-[#1c3869] focus:border-[#111735] focus:scale-95"
          />
          <input
            type="text"
            placeholder="Your State.."
            className="px-3 py-2 form-input border border-gray-100 rounded-md text-white transition duration-700 ease-in-out focus:outline-none focus:ring-1 focus:ring-[#1c3869] focus:border-[#111735] focus:scale-95"
          />
          <input
            type="text"
            placeholder="Your Current Job Title.."
            className="px-3 py-2 form-input border border-gray-100 rounded-md text-white transition duration-700 ease-in-out focus:outline-none focus:ring-1 focus:ring-[#1c3869] focus:border-[#111735] focus:scale-95"
          />

          <input
            type="text"
            placeholder="Your Last Education.."
            className="px-3 py-2 form-input border border-gray-100 rounded-md text-white transition duration-700 ease-in-out focus:outline-none focus:ring-1 focus:ring-[#1c3869] focus:border-[#111735] focus:scale-95"
          />
          <input
            type="text"
            placeholder="Your Current Salary.."
            className="px-3 py-2 form-input border border-gray-100 rounded-md text-white transition duration-700 ease-in-out focus:outline-none focus:ring-1 focus:ring-[#1c3869] focus:border-[#111735] focus:scale-95"
          />
          <input
            type="text"
            placeholder="Your Expected Salary.."
            className="px-3 py-2 form-input border border-gray-100 rounded-md text-white transition duration-700 ease-in-out focus:outline-none focus:ring-1 focus:ring-[#1c3869] focus:border-[#111735] focus:scale-95"
          />

          <input
            type="text"
            placeholder="Your Start Date.."
            className="px-3 py-2 form-input border border-gray-100 rounded-md text-white transition duration-700 ease-in-out focus:outline-none focus:ring-1 focus:ring-[#1c3869] focus:border-[#111735] focus:scale-95"
          />
          <input
            type="text"
            placeholder="Your Desired Job.."
            className="px-3 py-2 form-input border border-gray-100 rounded-md text-white transition duration-700 ease-in-out focus:outline-none focus:ring-1 focus:ring-[#1c3869] focus:border-[#111735] focus:scale-95"
          />
          <input
            type="text"
            placeholder="Your LinkedIn Profile.."
            className="px-3 py-2 form-input border border-gray-100 rounded-md text-white transition duration-700 ease-in-out focus:outline-none focus:ring-1 focus:ring-[#1c3869] focus:border-[#111735] focus:scale-95"
          />

          <select className="px-3 py-2 form-input border border-gray-100 rounded-md text-white transition duration-700 ease-in-out focus:outline-none focus:ring-1 focus:ring-[#1c3869] focus:border-[#111735] ">
            <option className="text-black">Internet</option>
            <option className="text-black">Referral</option>
            <option className="text-black">Social Media</option>
          </select>
        </div>

        <textarea
          rows={5}
          placeholder="Write something.."
          className="px-3 py-2 form-input border border-gray-100 rounded-md text-white transition duration-700 ease-in-out focus:outline-none focus:ring-1 focus:ring-[#1c3869] focus:border-[#111735] focus:scale-95 w-full resize-none"
        ></textarea>

        <div>
          <label className="block py-2 text-sm font-medium mb-1">CV Upload</label>
          <input
            type="file"
            className="block  w-full text-sm text-white bg-transparent border border-white/20 rounded-md cursor-pointer file:bg-blue-950 file:text-white file:px-4 file:py-1 file:border-0 file:rounded file:mr-4"
          />
        </div>

        <div className="flex justify-between items-center gap-4 mt-6">
          <button
            type="reset"
            className="px-6 py-1 flex items-center gap-2 rounded-full bg-gray-800/20 border border-white/20 hover:bg-white/20 transition"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-4 py-1 flex items-center gap-2 rounded-full text-white hover:text-black text-lg border border-gray-300 bg-[#071c55] hover:bg-white transition"
          >
            <Send className="w-5 h-5" />
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
