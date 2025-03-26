const Contact = () => {
  return (
<div className="p-10 max-w-3xl mx-auto bg-gray-100 shadow-md rounded-xl text-gray-900">
<h1 className="text-4xl font-bold text-center mb-6 text-blue-600">Get in Touch</h1>
<p className="text-lg text-center mb-6">
        We’re here to help! Contact us with any questions, feedback, or inquiries.
</p>
<div className="bg-white p-6 rounded-lg shadow-sm">
<h2 className="text-2xl font-semibold mb-4">Contact Details</h2>
<p className="mb-2"><strong>Email:</strong> contact@myyoutube.com</p>
<p className="mb-2"><strong>Phone:</strong> +1 (555) 987-6543</p>
<p><strong>Address:</strong> 123 Creative Street, Tech City, TX 75001</p>
</div>
<form className="mt-6 space-y-4 bg-white p-6 rounded-lg shadow-sm">
<h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
<input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
<input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
<textarea
          rows="5"
          placeholder="Your Message"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
></textarea>
<button className="w-full p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
          Submit
</button>
</form>
<div className="text-center mt-6">
<p className="text-lg font-semibold">Follow Us:</p>
<div className="flex justify-center space-x-4 mt-2">
<a href="#" className="text-blue-500 hover:underline">Twitter</a>
<a href="#" className="text-blue-500 hover:underline">Instagram</a>
<a href="#" className="text-blue-500 hover:underline">Facebook</a>
</div>
</div>
</div>
  );
};
 
export default Contact;
