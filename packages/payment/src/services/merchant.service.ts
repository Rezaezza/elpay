import {
  merchantRepository,
  type Merchant,
  type MerchantStatus,
} from "@elpay/database";

import {
  ConflictError,
  NotFoundError,
} from "../errors";

export interface CreateMerchantInput {
  ownerId: string;
  name: string;
  slug: string;

  logo?: string;
  description?: string;
  website?: string;
  supportEmail?: string;
  webhookUrl?: string;
}

export interface UpdateMerchantInput {
  name?: string;
  logo?: string;
  description?: string;
  website?: string;
  supportEmail?: string;
  webhookUrl?: string;
  status?: MerchantStatus;
}

export class MerchantService {
  async createMerchant(
    input: CreateMerchantInput
  ): Promise<Merchant> {
    const exists =
      await merchantRepository.findBySlug(input.slug);

    if (exists) {
      throw new ConflictError(
        "Merchant slug already exists"
      );
    }

    return merchantRepository.create({
      owner: {
        connect: {
          id: input.ownerId,
        },
      },

      name: input.name,
      slug: input.slug,

      logo: input.logo,
      description: input.description,

      website: input.website,
      supportEmail: input.supportEmail,
      webhookUrl: input.webhookUrl,
    });
  }

  async getMerchant(id: string) {
    const merchant =
      await merchantRepository.findById(id);

    if (!merchant) {
      throw new NotFoundError(
        "Merchant not found"
      );
    }

    return merchant;
  }

  async getMerchantBySlug(slug: string) {
    return merchantRepository.findBySlug(slug);
  }

  async listMerchants() {
    return merchantRepository.list();
  }

  async updateMerchant(
    id: string,
    input: UpdateMerchantInput
  ) {
    await this.getMerchant(id);

    return merchantRepository.update(id, input);
  }

  async deleteMerchant(id: string) {
    await this.getMerchant(id);

    return merchantRepository.delete(id);
  }
}

export const merchantService =
  new MerchantService();