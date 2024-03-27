import { FastifyPluginAsync } from "fastify";
import { Type, TypeBoxTypeProvider } from "@fastify/type-provider-typebox";

import { renderToStaticMarkup } from "react-dom/server";

import { SuiLogo } from "../../components/logos/SuiLogo.js";
import { SuiFrenImage } from "../../components/SuiFrenImage.js";
import { accessories as suiFrensAccessories } from "../../constants/accessories.js";

export const accessories: FastifyPluginAsync = async (fastify) => {
  fastify.withTypeProvider<TypeBoxTypeProvider>().get(
    "/accessories/:name/svg",
    {
      schema: {
        params: Type.Object({
          name: Type.String(),
        }),
        response: {
          200: {
            type: "string",
            headers: {
              "Content-Type": "image/svg+xml",
            },
          },
        },
      },
    },
    async (request, reply) => {
      const accessoryName = request.params.name;
      const accessory = suiFrensAccessories.find(
        (accessory) => accessory.name === accessoryName
      );

      if (!accessory) {
        return reply.status(404);
      }

      const renderedSvg = renderToStaticMarkup(
        <SuiFrenImage
          attributes={{
            mainColor: "FFFFFF",
            secondaryColor: "FFFFFF",
            expression: "bigSmile",
            skin: "basic",
            earShape: "default",
          }}
          accessories={[accessory]}
          logo={<SuiLogo />}
          shadow
          incognito
        />
      );
      reply.header("Content-Type", "image/svg+xml");
      return reply.send(renderedSvg);
    }
  );
};
