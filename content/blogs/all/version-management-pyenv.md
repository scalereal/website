---
title: Version Management — pyenv
description: >-
  A practical guide to Pyenv for managing and switching between multiple Python versions, including installation steps, common commands, and troubleshooting.
categories:
  - backend
keywords:
  - pyenv
  - python version management
  - manage multiple python versions
date: '2026-01-16'
tags:
  - Backend
  - Python
  - Django2023
author: ScaleReal Team
image: '/images/blog/img_1768489215865_9681.png'
url: version-management-pyenv
draft: false
---

**Hello folks** I hope you all are doing well! In this article, we are going to see p[yenv](https://github.com/pyenv/pyenv)**. P**yenv is a version management tool for Python that allows you to easily switch between different versions of Python on a single machine. ** **At [ScaleReal](https://scalereal.com/) we work extensively on Python/Django Applications and have built a lot of highly scalable applications for various clients of ours.

### Here’s a list of everything that will be covered in this article:

1. *What is Pyenv?*
1. *Why do we need Pyenv?*
1. *How to install Pyenv?*
1. *Install multiple versions of Python using Pyenv*
1. *Helpful Pyenv commands*
1. *Troubleshooting*

### What is Pyenv?

> Pyenv is a simple tool that helps manage multiple versions of the Python programming language on the same computer. It allows you to easily switch between different versions of Python, so you can work on different projects that require different versions of the language. With pyenv, you can install multiple versions of Python, set a default version for your system, and even set a specific version for a particular project. This makes it easier to manage your Python projects and ensure that you are using the correct version of Python for each project.

### Why do we need Pyenv?

> We need pyenv for several reasons:

1. **Compatibility**: Different projects may require different versions of Python, and pyenv allows you to easily switch between those versions without affecting other projects.
1. **Testing**: Pyenv makes it easy to test your code on different versions of Python, allowing you to ensure that your code is compatible with multiple versions of the language.
1. **Isolation**: Pyenv creates isolated environments for each version of Python, so you can install packages and dependencies for each project without affecting other projects.
1. **Simplicity**: With pyenv, you don’t have to worry about manual installations or multiple version management techniques. It provides a simple and straightforward way to manage multiple versions of Python.

### How to install Pyenv?

> Here is a step-by-step guide to install Pyenv

1. **macOS**:

```plain text
brew install pyenv
```

2. **Ubuntu**:

```plain text
sudo apt-get update
sudo apt-get install -y make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev
git clone https://github.com/pyenv/pyenv.git ~/.pyenv
```

**3. Installation on Windows**:

- To install pyenv on Windows, you need to have the Windows Subsystem for Linux ([WSL](https://learn.microsoft.com/en-us/windows/wsl/)) installed. Here are the steps:
- Install WSL: [https://docs.microsoft.com/en-us/windows/wsl/install-win10](https://learn.microsoft.com/en-us/windows/wsl/install)
- Open the WSL terminal and install the required dependencies:

```plain text
sudo apt-get update
sudo apt-get install -y make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev
```

1. Clone the pyenv repository:

```plain text
git clone https://github.com/pyenv/pyenv.git ~/.pyenv
```

2. Add the following lines to your shell profile (e.g. ~/.bashrc or ~/.zshrc)

```plain text
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
if command -v pyenv 1>/dev/null 2>&1; then
  eval "$(pyenv init -)"
fi
```

3. Restart your shell or run `source ~/.bashrc` to load the changes.

4. Verify that pyenv is installed correctly by checking the version:

```plain text
pyenv version
```

### Install multiple versions of Python with Pyenv

- To install multiple versions of Python using pyenv, you can use the following steps:
- Use the `pyenv install` command to install the desired versions of Python. For example:

```plain text
pyenv install 3.8.10
pyenv install 3.10.5
```

- You can check the list of installed Python versions using the `pyenv versions` command.

### ⭐ Helpful Pyenv commands with examples

> Here are some of the most helpful pyenv commands, along with examples:

- `pyenv install` - Install a specific version of Python. For example:

```plain text
pyenv install 3.8.10
```

- `pyenv versions` - List all the installed versions of Python.
- `pyenv global` - Set a specific version of Python as the global version. For example:

```plain text
pyenv global 3.8.10
```

- `pyenv local` - Set a specific version of Python for the current project directory. For example:

```plain text
cd my_project
pyenv local 3.10.5
```

- `pyenv which` - Display the path to the Python executable for a specific version. For example:

```plain text
pyenv which python
```

- `pyenv shell` - Set a specific version of Python as the current shell environment. For example:

```plain text
pyenv shell 3.8.10
```

- `pyenv rehash` - Rebuild the `pyenv shims` after installation of a new python version or after modifying the PATH.
- `pyenv uninstall` - Uninstall a specific version of Python. For example:

```plain text
pyenv uninstall 3.8.6
```

> These are some of the most common and helpful pyenv commands. By using these commands, you can easily manage multiple versions of Python and switch between them as required by your projects.

### Troubleshooting:

> Here are some common troubleshooting tips for pyenv:

1. `pyenv: command not found`** error** - This error occurs when the pyenv executable is not found in your PATH. To resolve this, add the following line to your shell profile (e.g. `~/.bashrc` or `~/.zshrc`):

```plain text
export PATH="$HOME/.pyenv/bin:$PATH"
```

**2. Python version not switching** — If you are facing issues with switching between different versions of Python, you can try the following:

- Make sure you have the desired version of Python installed using `pyenv install`.
- Make sure the correct version of Python is set as the global or local version using `pyenv global` or `pyenv local`, respectively.
- Run `pyenv rehash` after switching versions to update the shims.

**3. Error while installing a version of Python** — If you are facing issues while installing a version of Python, you can try the following:

- Make sure your system has the required dependencies, such as `gcc` or `make`.
- Try installing a different version of Python. Some versions may have known compatibility issues with pyenv.
- Check the pyenv GitHub repository for open issues related to the version you are trying to install.

> These are some of the most common pyenv troubleshooting tips. If you are still facing issues, you can refer to the

[pyenv](https://github.com/pyenv/pyenv)

> In summary, pyenv is a valuable tool for anyone working with Python because it makes it easier to manage different versions of the language, test your code, and ensure compatibility with different projects.

---

At [Scalereal](https://scalereal.com/) We believe in Sharing and Open Source.
