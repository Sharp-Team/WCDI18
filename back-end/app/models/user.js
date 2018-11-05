const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

// Create a schema
const userSchema = new Schema({
  method: {
    type: String,
    enum: ['local', 'google', 'facebook'],
    required: true
  },
  local: {
    username: {
      type: String,
      lowercase: true
    },
    password: {
      type: String
    },
		avatar: {
			type: String
		},
		email: {
			type: String
		},
		full_name: {
			type: String,
		},
		phone_number: {
			type: String
		},
		province: {
			type: String,
		},
		district: {
			type: String,
		},
		address_detail: {
			type: String,
		},
		object: {
			type: String,
			enum: ['customer', 'worker']
		},
		career: {
			type: String,
			required: false
		},
		indentify_card: {
			type: String,
			required: false
		},
  },
  google: {
    id: {
      type: String
    },
    email: {
      type: String,
      lowercase: true
    }
  },
  facebook: {
    id: {
      type: String
    },
    email: {
      type: String,
      lowercase: true
    }
  }
});

userSchema.pre('save', async function(next) {
  try {
    if (this.method !== 'local') {
      next();
    }
    // Generate a salt
    const salt = await bcrypt.genSalt(10);
    // Generate a password hash (salt + hash)
    const passwordHash = await bcrypt.hash(this.local.password, salt);
    // Re-assign hashed version over original, plain text password
    this.local.password = passwordHash;
    next();
  } catch(error) {
    next(error);
  }
});

userSchema.methods.isValidPassword = async function(newPassword) {
  try {
    return await bcrypt.compare(newPassword, this.local.password);
  } catch(error) {
    throw new Error(error);
  }
}

// Create a model
const User = mongoose.model('user', userSchema);

// Export the model
module.exports = User;
