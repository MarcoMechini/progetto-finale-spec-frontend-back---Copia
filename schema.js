// THIS FILE IS AUTO-GENERATED from types.ts - DO NOT EDIT DIRECTLY
import z from 'zod';


// Schema generated from types.ts NutritionalValue type
const NutritionalValueSchema = z.object({
    name: z.string(),
  quantity: z.number(),
  unit: z.string(),
}).strict(); // Add strict mode to reject extra properties

// Schema generated from types.ts Fruit type
export const FruitSchema = z.object({
  id: z.number().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  title: z.string({ required_error: "Title is required" }),
  calories: z.number(),
  category: z.string({ required_error: "Category is required" }),
  nutritionalValues: z.array(NutritionalValueSchema),
}).strict(); // Add strict mode to reject extra properties


export function validateFruit(data) {
  try {
    const result = FruitSchema.parse(data);
    return { valid: true, data: result };
  } catch (error) {
    return { 
      valid: false, 
      errors: error.errors.map(err => ({
        field: err.path.join('.'),
        message: err.message
      }))
    };
  }
}

// Export all validators as a map for dynamic usage
export const validators = {
  "fruit": validateFruit
};

// Export readonly properties for each type to prevent updates
export const readonlyProperties = {
  "fruit": []
};
