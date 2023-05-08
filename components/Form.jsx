import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="green_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} dan bagikan quote terbaik kamu hari ini, curahkan seluruh
        kata-kata motivasi dan sebarkan inspirasi ke seluruh dunia.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-white">
            Quote Kamu
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Tulis quote mu disini..."
            required
            className="form_textarea"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-white">
            Tag {` `}
            <span className="font-normal">
              (#programming, #financial #idea)
            </span>
          </span>

          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type="text"
            placeholder="#tag"
            required
            className="form_input"
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-400 text-sm">
            Batal
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
