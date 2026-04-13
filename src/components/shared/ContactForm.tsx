import { useState } from 'react';
import Button from '../ui/Button';

interface FormData {
  name: string;
  email: string;
  organization: string;
  subject: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  organization: '',
  subject: '',
  message: '',
};

const inputClasses =
  'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-electric focus:ring-1 focus:ring-electric/50 outline-none text-white placeholder:text-text-secondary transition-colors duration-200';

const labelClasses = 'block text-sm font-medium text-text-secondary mb-2';

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-electric/20 flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-electric"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-white mb-2">
          Thank you!
        </h3>
        <p className="text-text-secondary">
          We'll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className={labelClasses}>
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClasses}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      {/* Organization */}
      <div>
        <label htmlFor="organization" className={labelClasses}>
          Organization
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          placeholder="Your organization (optional)"
          value={formData.organization}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className={labelClasses}>
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className={inputClasses}
        >
          <option value="" disabled>
            Select a subject
          </option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Event Support">Event Support</option>
          <option value="Partnership">Partnership</option>
          <option value="Research Collaboration">Research Collaboration</option>
          <option value="Media Inquiry">Media Inquiry</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us how we can help..."
          value={formData.message}
          onChange={handleChange}
          className={inputClasses + ' resize-none'}
        />
      </div>

      {/* Submit */}
      <Button className="w-full" onClick={() => {}}>
        Send Message
      </Button>
    </form>
  );
}
