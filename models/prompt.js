import {Schema, model, models} from "mongoose";

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  prompt:{
    type: String,
    required: [true, 'Quote perlu diisi']
  },
  tag: {
    type: String,
    required: [true, 'Tag diperlukan']
  }
})

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;