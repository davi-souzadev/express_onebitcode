let posts = [
	{ id: "1", title: "Introdução ao Node.js", content: "Descubra como o Node.js revolucionou o desenvolvimento web com sua arquitetura orientada a eventos.", createdAt: new Date(), updatedAt: new Date() },
	{ id: "2", title: "Construindo APIs com Node.js", content: "Aprenda a criar APIs RESTful robustas e escaláveis utilizando o Node.js e o framework Express.", createdAt: new Date(), updatedAt: new Date() },
	{ id: "3", title: "Gerenciando Pacotes com npm", content: "Saiba como utilizar o npm para instalar, atualizar e gerenciar pacotes de maneira eficiente em projetos Node.js.", createdAt: new Date(), updatedAt: new Date() }
]

export const postModel = {
  getAll() {
    return posts;
  },

  getById(id) {
    return posts.find((post) => post.id === id);
  },

  create(title, content) {
    const post = {
      id: Date.now().toString(),
      title: title,
      content: content,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    return post;
  },

  save(post) {
    posts.unshift(post);
  },

  update(id, updatedPost) {
    const index = posts.findIndex((post) => post.id === id);
    posts[index] = {
      ...posts[index],
      ...updatedPost,
      updatedAt: new Date(),
    };
  },

  delete(id) {
    posts = posts.filter((post) => post.id !== id);
  },
};
