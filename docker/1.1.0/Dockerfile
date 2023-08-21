FROM debian:bullseye-slim

LABEL maintainer "Infer team"

# mkdir the man/man1 directory due to Debian bug #863199
RUN apt-get update && \
  mkdir -p /usr/share/man/man1 && \
  apt-get install --yes --no-install-recommends \
  curl \
  libc6-dev \
  openjdk-11-jdk-headless \
  sqlite3 \
  xz-utils \
  cmake make g++ zip unzip \
  python3 gcovr \
  cppcheck \
  zlib1g-dev && \
  rm -rf /var/lib/apt/lists/*

# # Download the Infer release
# RUN INFER_VERSION=v1.1.0; \
#   cd /opt && \
#   curl -sL \
#   https://github.com/facebook/infer/releases/download/${INFER_VERSION}/infer-linux64-${INFER_VERSION}.tar.xz | \
#   tar xJ && \
#   rm -f /infer && \
#   ln -s ${PWD}/infer-linux64-$INFER_VERSION /infer

# # Install infer
# ENV PATH /infer/bin:${PATH}

env INFER_VERSION=v1.1.0
copy infer-linux64-${INFER_VERSION}.tar.xz /
run tar -C / -xf /infer-linux64-${INFER_VERSION}.tar.xz
env INFER_HOME=/infer-linux64-${INFER_VERSION}
env PATH=$INFER_HOME/bin:$PATH
